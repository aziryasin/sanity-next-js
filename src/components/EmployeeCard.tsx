import { EMPLOYEES_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export function EmployeeCard(props: EMPLOYEES_QUERYResult[0]) {
  const { name, image, designation } = props;

  return (
    <Link className="group" href={`/employees/${props.slug!.current}`}>
      <div className="flex items-center gap-x-6 bg-sky-100 hover:bg-sky-200 rounded-lg">
        {image ? (
          <Image
            src={urlFor(image).width(200).height(200).url()}
            width={200}
            height={200}
            className="h-16 w-16 rounded-lg"
            alt={name || ""}
          />
        ) : null}
        <div>
          <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
            {name}
          </h3>
          <p className="text-sm/6 font-semibold text-indigo-600">
            {designation}
          </p>
        </div>
      </div>
    </Link>
  );
}
