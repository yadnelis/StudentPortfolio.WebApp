import { enums } from "@/utilities/enums";
import { getStudentResponse } from "./getStudentResponse";

enums.acknowledgementType

export interface getAcknowledgementResponse {
    Id: string;
    StudentId: number;
    Type: keyof typeof enums.acknowledgementType;
    Place: string;
    Description: string;
    StartDate: Date;
    EndDate?: Date;
    OtherType?: string;
    CompetitionPosition?: number;
    CompetitionName?: string;
    StudentOrganizatonName?: string;
    Student: getStudentResponse;
}