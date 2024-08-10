import { Card } from "@nextui-org/react";
import Product from "./product";
import useGet from "@/api/get";

export default function Products() {
  const { data: get175 } = useGet("products/getProduct175");
  const { data: get350 } = useGet("/products/getProduct350");
  console.log(get175);
  return (
    <Card>
      <div className="title">
        <h2>SẢN PHẨM MỚI</h2>
        <p>Các sản phẩm mới có tại cửa hàng</p>
      </div>
      <Product name={"Ghẹ sữa rim tỏi ớt"} />
    </Card>
  );
}
