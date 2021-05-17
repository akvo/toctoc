import React from "react";
import { Col, Row } from "antd";
import "./MainFooter.scss";

export default function MainFooter() {
  return (
    <Row className={"MainFooter"}>
      <Col span={24}>Built by Akvo.org</Col>
    </Row>
  );
}
