import { Params } from "next/dist/server/request/params";

export default async ({ params }: PageProps<"/[test]">) => {
  console.log({ params: (await params).test });
  return <div>{(await params).test}</div>;
};
