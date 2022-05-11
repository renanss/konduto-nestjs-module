export class UpdateStatusDto {
    id: string;
    status: "APPROVED" | "DECLINED" | "NOT_AUTHORIZED" | "CANCELED"  | "FRAUD";
    comments: string;
}
