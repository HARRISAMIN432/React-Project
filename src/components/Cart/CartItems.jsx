import React from "react";
import Row from "../common/Row";
import QtyContainer from "../common/QtyContainer";

function CartItems() {
  return (
    <Row className="border-[1px] border-gray-400 rounded items-center w-full py-[10px] px-[20px] mb-[30px]">
      <Row className="w-[20%]">
        <img
          className="w-2/3 h-[150px] object-cover rounded-[6px]"
          src="https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </Row>
      <p className="w-[20%] text-[16px] text-black font-medium">Demo Product</p>
      <p className="w-[15%] text-[16px] text-black font-medium ">$20</p>
      <div className="w-[20%] mb-[50px] m">
        <QtyContainer />
      </div>
      <p className="w-[20%] ml-[80px] text-[16px] text-black font-medium">
        $1020
      </p>
    </Row>
  );
}

export default CartItems;
