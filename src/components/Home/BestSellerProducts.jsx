import Container from "../common/Container";
import React, { useEffect, useState } from "react";
import Row from "../common/Row";
import ProductCart from "../ProductCart";
import client from "../../apis";
import apiEndpoints from "../../apis/endPoint";

function BestSellerProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleGetProduct = async (id) => {
    try {
      const response = await client.get(apiEndpoints.products(12, id));
      setProducts(response.data.docs);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const responseCat = await client.get(apiEndpoints.categories);
      // const response = await client.get(apiEndpoints.products(12));
      handleGetProduct();
      setCategories(responseCat.data);
      // setProducts((await response).data.docs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h1 className="w-full text-center text-[30px] uppercase mb-[40px] text-black font-semibold mt-[80px]">
        Best Seller Products
      </h1>
      <Row className="items-center">
        <p className="text-[16px] mr-[40px] cursor-pointer text-black font-bold hover:text-[#757575]">
          All Products
        </p>
        {categories.map((item) => (
          <p
            onClick={() => handleGetProduct(item._id)}
            className="text-[16px] mr-[40px] cursor-pointer text-[#00000080] hover:text-[#757575]"
            key={item._id}
          >
            {item.title}
          </p>
        ))}
      </Row>
      <Row className="flex-wrap gap-[1%] mt-[40px]">
        {products.map((item) => (
          <div className="w-[24%] mb-[20px] " key={item.id}>
            <ProductCart data={item} />
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default BestSellerProducts;
