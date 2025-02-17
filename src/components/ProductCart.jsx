import React from "react";
import { Link } from "react-router-dom";
import Row from "./common/Row";

function ProductCart() {
  return (
    <Link className="w-full pb-[5px] shadow" to="/product-detail">
      <img
        src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
        alt=""
        className="w-full object-cover h-[400px]"
      />
      <Row className="10px">
        <h6 className="text-black text-[16px] font-semibold mt-[18px] px-[10px]">
          Demo Title
        </h6>
      </Row>
      <Row className="justify-between mt-[16px] px-[10px] mb-[10px]">
        <p className="text-[16px] text-[#00000080]">Clothing</p>
        <p className="text-[16px] text-[#00000080] font-semibold">$20</p>
      </Row>
    </Link>
  );
}

export default ProductCart;
