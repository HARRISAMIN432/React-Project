import React, { createElement } from "react";
import Row from "../common/Row";

const HeaderButton = (props) => {
  return (
    <Row className="ml-[5px]">
      <props.Icon />
      <p className="text=[#le2832] hover:text-slate-400 ml-[2px]">
        {props.title}
      </p>
    </Row>
  );
};

export default HeaderButton;
