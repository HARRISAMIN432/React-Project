import React from "react";
import Row from "../common/Row";
import HeaderButton from "./HeaderButtons";
import SearchIcon from "../../svgs/SearchIcon";
import RotatedSquare from "../../svgs/RotatedSquare";
import UserIcon from "../../svgs/UserIcon";
import Cart from "../../svgs/BucketIcon";

function TopHeader() {
  return (
    <div className="w-full px-[8%] h-full">
      <Row className="flex items-center h-full justify-between">
        <SearchIcon />
        <Row className="items-center">
          <RotatedSquare />
          <h1 className="text-[28px] text-black mx-[10px]">RiftCom</h1>
          <RotatedSquare />
        </Row>
        <Row>
          <Row>
            <HeaderButton title="Account" Icon={UserIcon} />
            <HeaderButton
              title="Cart"
              Icon={Cart}
              className="ml-[5px]"
              url="/cart"
            />
          </Row>
        </Row>
      </Row>
    </div>
  );
}

export default TopHeader;
