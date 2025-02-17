import React from "react";
import Row from "../common/Row";
import Container from "../common/Container";
import { Link } from "react-router-dom";

function PopularProducts() {
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
        <Link to="/product-Detail">
          <img
            className="w-[570px] h-[600px] cursor-pointer object-cover ml-[30px]"
            src="https://images.unsplash.com/photo-1617720197345-5e5235ec6220?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlYWNlfGVufDB8fDB8fHww"
            alt=""
          />
        </Link>

        <Row className="w-[50%] flex-wrap gap-[24px] ml-[30px]">
          <div className="w-[46%] h-[272px]">
            <Link to="/product-detail">
              <img
                className="w-[272px] h-full object-cover"
                src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxsZXJ5fGVufDB8fDB8fHww"
                alt=""
              />
            </Link>
          </div>
          <div className="w-[46%] h-[272px]">
            <Link to="/product-detail">
              <img
                className="w-[272px] h-full object-cover"
                src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxsZXJ5fGVufDB8fDB8fHww"
                alt=""
              />
            </Link>
          </div>
          <div className="w-[46%] h-[272px]">
            <Link to="/product-detail">
              <img
                className="w-[272px] h-full object-cover"
                src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxsZXJ5fGVufDB8fDB8fHww"
                alt=""
              />
            </Link>
          </div>
          <div className="w-[46%] h-[272px]">
            <Link to="product-detail">
              <img
                className="w-[272px] h-full object-cover"
                src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxsZXJ5fGVufDB8fDB8fHww"
                alt=""
              />
            </Link>
          </div>
        </Row>
      </Row>
    </Container>
  );
}

export default PopularProducts;
