import { client } from "@/sanity/lib/client";
import { HEADER_CONTENT_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

const options = { next: { revalidate: 60 } };

export async function Header() {
  const headerItems = await client.fetch(HEADER_CONTENT_QUERY, {}, options);
  console.log(headerItems);

  return (
    <div className="from-pink-50 to-white bg-gradient-to-b p-6">
      <header className="bg-white/80 shadow-md flex items-center justify-between p-6 rounded-lg container mx-auto shadow-pink-50">
        <Link
          className="text-pink-700 md:text-xl font-bold tracking-tight"
          href="/"
        >
          Project Turbo
        </Link>

        <ul className="flex items-center gap-4 font-semibold text-slate-700">
          {headerItems.map((item) => (
            <Link
              className="hover:text-pink-500 transition-colors"
              href={item.path ?? "/"}
              key={item.path}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </header>
    </div>
  );
}
