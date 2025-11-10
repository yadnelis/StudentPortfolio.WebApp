import { BaseResponse } from "@/dtos/_baseResponse";
import { Acknowledgement } from "./acknowledgement";

export interface Student {
  id: string;
  institutionalId: string;
  name: string;
  lastName: string;
  fullName: string;
  startDate: Date;
  institution: string;
  acknowledgements?: Acknowledgement[];
}

export type GetStudentResponse = BaseResponse<Student>;
export type GetStudentsResponse = BaseResponse<Student[]>;

export interface GetStudentRequest {}
