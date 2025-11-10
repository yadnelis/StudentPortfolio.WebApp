"use client";
import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { SearchInput } from "@/components/SearchInput";
import {
  AcknowledgementListItem,
  StudentProfileCard,
} from "@/components/StudentProfileCard";
import { TextInput } from "@/components/TextInput";
import { ArrowBigDown, ArrowDown, icons } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="flex flex-col gap-12 justify-center items-center w-full p-12">
      <Button
        onClick={(_) => {
          console.log("aaa");
          setIsOpen(true);
        }}
      >
        Open Modal
      </Button>

      <div className="bg-white p-5 flex gap-5">
        <TextInput value={"Test"} onChange={() => {}} />
        <TextInput placeholder={"Test"} />
        <SearchInput />
      </div>
      <div className="bg-slate-500 p-5 flex gap-5">
        <TextInput value={"Test"} onChange={() => {}} />
        <TextInput placeholder={"Test"} />
        <SearchInput />
      </div>
      <div className="bg-slate-100 p-5 flex gap-5">
        <Button>Button</Button>
        <Button color="secondary">Button</Button>
        <Button color="primary">Button</Button>
        <Button color="accent">Button</Button>
      </div>
      <StudentProfileCard
        institutionalId="Y00604979"
        fullName="Yadnelis Gonzalez"
        description="Lorem ipsum dolor sit amet."
      >
        <AcknowledgementListItem
          type={2}
          place="FBI"
          startDate={new Date(2025, 10, 22)}
          endDate={new Date(2025, 10, 22)}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          voluptate totam maiores dolore laudantium, voluptates omnis? Aliquam
          voluptate soluta natus.
        </AcknowledgementListItem>
        <AcknowledgementListItem
          type={2}
          place="FBI"
          startDate={new Date(2025, 10, 23)}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          voluptate totam maiores dolore laudantium, voluptates omnis? Aliquam
          voluptate soluta natus.
        </AcknowledgementListItem>
        <AcknowledgementListItem
          type={2}
          place="FBI"
          startDate={new Date(2025, 10, 25)}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          voluptate totam maiores dolore laudantium, voluptates omnis? Aliquam
          voluptate soluta natus.
        </AcknowledgementListItem>
        <AcknowledgementListItem
          type={2}
          place="FBI"
          startDate={new Date(2025, 10, 21)}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          voluptate totam maiores dolore laudantium, voluptates omnis? Aliquam
          voluptate soluta natus.
        </AcknowledgementListItem>
      </StudentProfileCard>
      <Modal
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        title="urmom"
        header={<div>womp womp</div>}
      />
    </section>
  );
};

export default Page;
