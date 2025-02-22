import React from "react";
import { Link } from "react-router-dom";
import Row from "./common/Row";

function ProductCart({ data }) {
  return (
    <Link className="w-full pb-[5px] shadow" to={`product/${data._id}`}>
      <img src={data.img} alt="" className="w-full object-cover h-[400px]" />
      <Row className="10px">
        <h6 className="text-black text-[16px] font-semibold mt-[18px] px-[10px]">
          Demo Title
        </h6>
      </Row>
      <Row className="justify-between mt-[16px] px-[10px] mb-[10px]">
        <p className="text-[16px] text-[#00000080]">{data.category.title}</p>
        <p className="text-[16px] text-[#00000080] font-semibold">
          ${data.price}
        </p>
      </Row>
    </Link>
  );
}

export default ProductCart;
