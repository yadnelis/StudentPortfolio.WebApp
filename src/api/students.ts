"use server";

import { GetStudentRequest, GetStudentsResponse } from "@/dtos/student";
import { appendQueryString, convertToURLQueryParams } from "@/utilities/utils";
import axios from "axios";

const controller = (process.env.API_URL ?? "MISSING_API_URL") + "/Students";

export const getStudents = async (args?: GetStudentRequest) => {
  const url = appendQueryString(controller, args);
  var res = await axios.get<GetStudentsResponse>(url);
  return res.data;
};
