import Container from "../common/Container";
import React from "react";
import Row from "../common/Row";
import ProductCart from "../ProductCart";

function BestSellerProducts() {
  return (
    <Container>
      <h1 className="w-full text-center text-[30px] uppercase mb-[40px] text-black font-semibold mt-[80px]">
        Best Seller Products
      </h1>
      <Row className="items-center">
        <p className="text-[16px] mr-[40px] cursor-pointer text-black font-bold hover:text-[#757575]">
          All Products
        </p>
        <p className="text-[16px] mr-[40px] cursor-pointer text-[#00000080] hover:text-[#757575]">
          Clothing
        </p>
        <p className="text-[16px] mr-[40px] cursor-pointer text-[#00000080] hover:text-[#757575]">
          Shoes
        </p>
        <p className="text-[16px] mr-[40px] cursor-pointer text-[#00000080] hover:text-[#757575]">
          Bags
        </p>
        <p className="text-[16px] mr-[40px] cursor-pointer text-[#00000080] hover:text-[#757575]">
          Others
        </p>
      </Row>
      <Row className="flex-wrap gap-[1%] mt-[40px]">
        <div className="w-[24%] mb-[20px] ">
          <ProductCart />
        </div>
        <div className="w-[24%] mb-[20px]">
          <ProductCart />
        </div>
        <div className="w-[24%] mb-[20px]">
          <ProductCart />
        </div>
        <div className="w-[24%] mb-[20px]">
          <ProductCart />
        </div>
        <div className="w-[24%] mb-[20px]">
          <ProductCart />
        </div>
        <div className="w-[24%] mb-[20px]">
          <ProductCart />
        </div>
        <div className="w-[24%] mb-[20px]">
          <ProductCart />
        </div>
        <div className="w-[24%] mb-[20px]">
          <ProductCart />
        </div>
      </Row>
    </Container>
  );
}

export default BestSellerProducts;
