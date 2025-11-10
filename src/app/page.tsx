import { getStudents } from "@/api/students";
import {
  AcknowledgementListItem,
  StudentProfileCard,
} from "@/components/StudentProfileCard";

const Page = async () => {
  const students = await getStudents();
  console.log(students);
  return (
    <section className="flex flex-col gap-12 justify-center items-center w-full p-12">
      {students.entity?.map((st) => (
        <StudentProfileCard
          key={st.id}
          {...st}
          fullName={st.fullName}
          institutionalId={st.institutionalId}
        >
          {st.acknowledgements?.map((ack) => (
            <AcknowledgementListItem key={ack.id} {...ack} />
          ))}
        </StudentProfileCard>
      ))}
    </section>
  );
};

export default Page;
