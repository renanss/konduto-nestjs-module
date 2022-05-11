export class WebhookResponse {

    order_id: string;
    timestamp: Date;
    status: "APPROVED" | "PENDING" | "DECLINED" | "CANCELED" | "NOT_AUTHORIZED" | "NOT_ANALYZED";
    signature: string;

    constructor(partial: Partial<WebhookResponse>){
        Object.assign(this, partial)
    }
}
