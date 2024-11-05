import { client } from "@/sanity/lib/client";
import { EMPLOYEES_QUERY } from "@/sanity/lib/queries";
import { Title } from "@/components/Title";
import { EmployeeCard } from "@/components/EmployeeCard";

const options = { next: { revalidate: 60 } };

export default async function Page() {
  const employees = await client.fetch(EMPLOYEES_QUERY, {}, options);

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Employee Index</Title>
      <ul
        role="list"
        className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
      >
        {employees.map((employee) => (
          <EmployeeCard key={employee._id} {...employee} />
        ))}
      </ul>
    </main>
  );
}
