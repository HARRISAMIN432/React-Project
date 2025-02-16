import React from "react";
import Container from "../common/Container";
import Row from "../common/Row";

function Footer() {
  return (
    <div>
      <Container className="bg-black h-[52px] py-[14px]">
        <Row className="text-white justify-between h-full items-center">
          <p>2023 RiftCom Inc</p>
          <img className="w-[283px]" src="/cards.png" alt="" />
          <p>Scroll to Top</p>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
