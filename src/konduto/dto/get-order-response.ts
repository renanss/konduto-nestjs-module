import { OrderDto } from "./order.dto";

export class GetOrderResponse {
    status: string;
    order: OrderDto;
}
