import React, { useEffect, useState } from "react";
import Row from "../common/Row";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import axios from "axios";
import apiEndpoints from "../../apis/endPoint";
import client from "../../apis";

function PopularProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await client.get(apiEndpoints.products());
      setProducts((await response).data.docs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="justify-center my-[20px] uppercase mt-[90px]">
        <h1 className="text-[30px] font-semibold text-[#1e2832]">
          Popular Products
        </h1>
      </Row>
      <Row className="gap-[24px]">
        <div className="h-[540px] w-[42px] relative">
          <p className="text-[34px] h-full w-[540px] text-black -rotate-90 absolute text-center -z-[1]">
            Explore new and popular styles
          </p>
        </div>
        <Link to={`product/${products[0]?.img}`}>
          <img
            className="w-[570px] h-[600px] cursor-pointer object-cover ml-[30px]"
            src={products[0] && products[0].img}
            alt=""
          />
        </Link>

        <Row className="flex-wrap w-1/2 gap-[24px]">
          {products.slice(1).map((item, idx) => {
            <Link
              to={`/product/:${item._id}`}
              className="w-[46%] h-[312px]"
              key={item._id}
            >
              <img
                src={item.img}
                alt=""
                className="w-[46%] h-full object-cover"
              />
            </Link>;
          })}
        </Row>
      </Row>
    </Container>
  );
}

export default PopularProducts;
