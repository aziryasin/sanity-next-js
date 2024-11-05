import { PROJECT_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

type ClientProps = {
  client: NonNullable<PROJECT_QUERYResult>["client"];
};

export function Client({ client }: ClientProps) {
  return client?.image || client?.name ? (
    <div className="flex items-center gap-2">
      {client?.image ? (
        <Image
          src={urlFor(client.image).width(80).height(80).url()}
          width={80}
          height={80}
          alt={client.name || ""}
          className="bg-pink-50 size-10 shadow-inner rounded-full"
        />
      ) : null}
      {client?.name ? (
        <p className="text-base text-slate-700">{client.name}</p>
      ) : null}
    </div>
  ) : null;
}
