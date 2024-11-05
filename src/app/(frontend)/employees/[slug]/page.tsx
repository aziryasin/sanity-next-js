import { client } from "@/sanity/lib/client";
import { EMPLOYEE_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { Employee } from "@/components/Employee";

type PostIndexProps = { params: { slug: string } };

const options = { next: { revalidate: 60 } };

export default async function Page({ params }: PostIndexProps) {
  const employee = await client.fetch(EMPLOYEE_QUERY, params, options);

  if (!employee) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Employee {...employee} />
    </main>
  );
}
