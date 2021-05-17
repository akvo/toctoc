import React from "react";
import { Row, Col } from "antd";
import "./BoardHeader.scss";

export default function BoardHeader() {
  return (
    <Row className={"BoardHeader"}>
      <Col span={6} className={"strategy"}>
        Interventions / strategy
      </Col>
      <Col span={12} className={"outcome"}>
        Outcome
      </Col>
      <Col span={6} className={"impact"}>
        Impact
      </Col>
    </Row>
  );
}
