"use client";
import { useParams } from "next/navigation";

export default ({}) => {
  const params = useParams();

  return <div>{params.test2}</div>;
};
