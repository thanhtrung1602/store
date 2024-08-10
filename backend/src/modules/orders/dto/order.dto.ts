// src/orders/dto/order.dto.ts
export class OrderDto {
  order_id: number;
  user_id: number;
  total: number;
  status: string;
  created_at: Date;
}

export class CreateOrderDto {
  user_id: number;
  total: number;
  status: string;
}
