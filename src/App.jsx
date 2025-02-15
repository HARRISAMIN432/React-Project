import { useState } from "react";
import SearchIcon from "./svgs/SearchIcon";
import RotatedSquare from "./svgs/RotatedSquare";
import "./App.css";
import Row from "./components/common/Row";
import UserIcon from "./svgs/UserIcon";
import Cart from "./svgs/BucketIcon";

function App() {
  return (
    <div className="w-full bg-[rgba(79,95,112,0.05)] h-[60px]">
      <div className="w-full px-[10%] h-full">
        <Row className="flex items-center h-full justify-between">
          <SearchIcon />
          <Row className="items-center">
            <RotatedSquare />
            <h1 className="text-[28px] text-black mx-[10px]">RiftCom</h1>
            <RotatedSquare />
          </Row>
          <Row>
            <Row>
              <UserIcon />
              <p className="text=[#le2832] hover:text-slate-400 ml-[2px]">
                Account
              </p>
            </Row>
            <Row className="ml-[20px]">
              <Cart />
              <p className="text=[#le2832] hover:text-slate-400 ml-[2px]">
                Cart
              </p>
            </Row>
          </Row>
        </Row>
      </div>
    </div>
  );
}

export default App;
