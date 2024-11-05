import { PortableText } from "next-sanity";
import { PROJECT_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PublishedAt";
import { Title } from "@/components/Title";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { client as sanityClient } from "@/sanity/lib/client";
import { ASSIGNED_EMPLOYEES_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const options = { next: { revalidate: 60 } };

export async function Project(props: NonNullable<PROJECT_QUERYResult>) {
  const { title, image, client, startedAt, description, projectId } = props;
  const assignedEmployees = await sanityClient.fetch(
    ASSIGNED_EMPLOYEES_QUERY,
    { projectId: props._id },
    options
  );
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      {imageConfigDefault && (
        <Image
          src={urlFor(image).width(200).height(200).url()}
          alt={title ?? ""}
          width="200"
          height="200"
        />
      )}
      <Title>{title}</Title>
      <div className="prose">
        <div className="grid-rows-2">
          <span>Project started:</span>

          <PublishedAt publishedAt={startedAt} />
        </div>
        <br />
        <p>Project ID: {projectId}</p>
        <br /> <p>Client: {client?.name}</p>
        <br />
        <h1 className="font-bold">Description</h1>
        {Array.isArray(description) && <PortableText value={description} />}
        <br />
        <h2>Assigned Employees ({assignedEmployees.length}):</h2>
        {assignedEmployees.map((employee) => (
          <Link href={`/employees/${employee.slug.current}`} key={employee._id}>
            <h2 className="text-base font-normal">
              {employee.name} ({employee.designation})
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
