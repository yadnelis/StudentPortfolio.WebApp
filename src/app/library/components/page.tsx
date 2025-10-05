import { TextInput } from "@/components/TextInput";
import { ArrowBigDown, ArrowDown, icons } from "lucide-react";

export default () => {
  return (
    <section className="flex gap-10 justify-center items-center h-full bg-slate-300">
      <TextInput leftButton={{ icon: <ArrowDown /> }} />
      <TextInput size="sm" leftButton={{ icon: <ArrowDown /> }} />
    </section>
  );
};
