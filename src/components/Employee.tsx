import { EMPLOYEE_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Link from "next/link";

export async function Employee(props: NonNullable<EMPLOYEE_QUERYResult>) {
  const { name, image, joinedAt, department, designation, projects, skills } =
    props;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      {imageConfigDefault && (
        <Image
          src={urlFor(image).width(200).height(200).url()}
          alt={name ?? ""}
          width="200"
          height="200"
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{name}</h1>
      <div className="prose">
        <p>Joined Calcey on {new Date(joinedAt).toLocaleDateString()}</p>
        <br />
        <p>Department: {department}</p>
        <br /> <p>Designation: {designation}</p>
        <br />
        <h1 className="font-bold">Assigned Projects</h1>
        <ul className="flex flex-col ">
          {projects &&
            projects.map((project) => (
              <Link
                href={`/projects/${project.slug.current}`}
                key={project.slug.current}
              >
                <li className="hover:underline" key={project}>
                  <p>{project.title}</p>
                </li>
              </Link>
            ))}
        </ul>
        <br />
        <h2 className="font-bold">Tech Expertise & Proficiency Level:</h2>
        <ul className="flex flex-col ">
          {skills &&
            skills.map((skill) => (
              <li key={skill.stack}>
                <p>
                  {skill.stack} - {skill.expertiseLevel}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
