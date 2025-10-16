import {
  AcknowledgementListItem,
  StudentProfileCard,
} from "@/components/StudentProfileCard";
import { TextInput } from "@/components/TextInput";
import { ArrowBigDown, ArrowDown, icons } from "lucide-react";

const Page = () => {
  return (
    <section className="flex flex-col gap-12 justify-center items-center w-full p-12">
      <div className="bg-white p-5 flex gap-5">
        <TextInput value={"Test"} />
        <TextInput placeholder={"Test"} />
      </div>
      <div className="bg-slate-500 p-5 flex gap-5">
        <TextInput value={"Test"} />
        <TextInput placeholder={"Test"} />
      </div>
      <StudentProfileCard
        studentId="Y00604979"
        fullName="Yadnelis Gonzalez"
        description="Lorem ipsum dolor sit amet."
      >
        <AcknowledgementListItem
          Type={2}
          Place="FBI"
          StartDate={new Date(2025, 10, 22)}
          EndDate={new Date(2025, 10, 22)}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          voluptate totam maiores dolore laudantium, voluptates omnis? Aliquam
          voluptate soluta natus.
        </AcknowledgementListItem>
        <AcknowledgementListItem
          Type={2}
          Place="FBI"
          StartDate={new Date(2025, 10, 23)}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          voluptate totam maiores dolore laudantium, voluptates omnis? Aliquam
          voluptate soluta natus.
        </AcknowledgementListItem>
        <AcknowledgementListItem
          Type={2}
          Place="FBI"
          StartDate={new Date(2025, 10, 25)}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          voluptate totam maiores dolore laudantium, voluptates omnis? Aliquam
          voluptate soluta natus.
        </AcknowledgementListItem>
        <AcknowledgementListItem
          Type={2}
          Place="FBI"
          StartDate={new Date(2025, 10, 21)}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          voluptate totam maiores dolore laudantium, voluptates omnis? Aliquam
          voluptate soluta natus.
        </AcknowledgementListItem>
      </StudentProfileCard>
    </section>
  );
};

export default Page;
