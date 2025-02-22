import React, { useState } from "react";
import BottomHeader from "../components/Header/BottomHeader";
import Container from "../components/common/Container";
import Row from "../components/common/Row";
import Button from "../components/common/Button";
import Layout from "../components/common/Layout";
import QtyContainer from "../components/common/QtyContainer";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const getProduct = async (id) => {
    try {
      const response = await client.get(apiEndpoints.apiEndpoints.product(id));
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <div className="w-full bg-[rgba(79,95,112,0.05)] h-[60px]">
        <BottomHeader />
        <Container className="my-[41px]">
          <Row className="justify-between">
            <Row className="w-[47%] flex-col">
              <img
                className="w-full object-cover h-[80vh]"
                src={product?.img}
                alt=""
              />
            </Row>
            <Row className="flex-col w-[47%] ">
              <h1 className="text-[30px] text-slate-700 font-semibold mb-[70px]">
                {`${product?.category.title} | ${product?.title}`}
              </h1>
              <Row className="gap-[20px] mb-[10px]">
                <p className="text-[18px] text-black font-medium w-[15%]">
                  Rating:
                </p>
                <p className="text-[18px] text-black">{product?.rating}</p>
              </Row>
              <Row className="gap-[20px]">
                <p className="text-[18px] text-black font-medium w-[15%]">
                  Price:
                </p>
                <p className="text-[18px] text-black">{product?.price}</p>
              </Row>
              <Row className="gap-[20px] mt-[30px]">
                <p className="text-[15px] text-black font-medium w-[15%]">
                  Description:
                </p>
                <p className="text-[18px] text-black">{product?.description}</p>
              </Row>
              <div className="w-full mt-[40px]">
                <QtyContainer />
              </div>
              <Button title="Add to cart" className="h-[52px] w-[150px]" />
            </Row>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default ProductDetail;
