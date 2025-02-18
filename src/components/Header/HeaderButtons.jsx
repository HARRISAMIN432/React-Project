import React, { createElement } from "react";
import Row from "../common/Row";
import { Link } from "react-router-dom";

const HeaderButton = ({ title, Icon, url = "/" }) => {
  return (
    <Link to={url}>
      <Row className="ml-[5px]">
        <Icon />
        <p className="text=[#le2832] hover:text-slate-400 ml-[2px]">{title}</p>
      </Row>
    </Link>
  );
};

export default HeaderButton;
