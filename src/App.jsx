import { useState } from "react";
import SearchIcon from "./svgs/SearchIcon";
import RotatedSquare from "./svgs/RotatedSquare";
import "./App.css";
import Row from "./components/common/Row";

function App() {
  return (
    <div className="w-full bg-[#1e28320d] h-[60px]">
      <div className="w-full px-[10%] h-full">
        <div className="flex items-center h-full">
          <div className="flex items-center">
            <SearchIcon />
            <RotatedSquare />
            <h1 className="text-[28px] text-black mx-[10px]">RiftCom</h1>
            <RotatedSquare />
          </div>
          <Row />
        </div>
      </div>
    </div>
  );
}

export default App;
