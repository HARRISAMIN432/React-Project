import React from "react";
import Row from "../common/Row";

const menus = [
  "Jewelleries and Accessories",
  "Clothing and shoes",
  "Home and Living",
  "Wedding and Party",
  "Toys and Entertainment",
  "Art and Collectibles",
];

function BottomHeader() {
  return (
    <div className="w-full px-[8%] h-[60px] bg-[#888f950d]">
      <Row className="flex items-center h-full justify-between">
        {menus.map((item) => (
          <p className="text-[15px] text-slate-800" key={item}>
            {item}
          </p>
        ))}
      </Row>
    </div>
  );
}

export default BottomHeader;
