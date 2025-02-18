import React from "react";
import BottomHeader from "../components/Header/BottomHeader";
import Container from "../components/common/Container";
import Row from "../components/common/Row";
import Button from "../components/common/Button";
import Layout from "../components/common/Layout";
import QtyContainer from "../components/common/QtyContainer";

function ProductDetail() {
  return (
    <Layout>
      <div className="w-full bg-[rgba(79,95,112,0.05)] h-[60px]">
        <BottomHeader />
        <Container className="my-[41px]">
          <Row className="justify-between">
            <Row className="w-[47%] flex-col">
              <img
                className="w-full object-cover h-[80vh]"
                src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </Row>
            <Row className="flex-col w-[47%] ">
              <h1 className="text-[30px] text-slate-700 font-semibold mb-[70px]">
                Clothing | Demo Product
              </h1>
              <Row className="gap-[20px] mb-[10px]">
                <p className="text-[18px] text-black font-medium w-[15%]">
                  Rating:
                </p>
                <p className="text-[18px] text-black">2/5</p>
              </Row>
              <Row className="gap-[20px]">
                <p className="text-[18px] text-black font-medium w-[15%]">
                  Price:
                </p>
                <p className="text-[18px] text-black">$20</p>
              </Row>
              <Row className="gap-[20px] mt-[30px]">
                <p className="text-[15px] text-black font-medium w-[15%]">
                  Description:
                </p>
                <p className="text-[18px] text-black">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quisquam quibusdam tenetur aperiam incidunt accusamus, nam
                  sint suscipit ipsa sapiente ratione consequuntur aliquid
                  assumenda illum magni, numquam possimus quod minus expedita!
                </p>
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
