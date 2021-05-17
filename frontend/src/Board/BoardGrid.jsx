import React from "react";
import { Col, Row } from "antd";
import { useStoreState } from "pullstate";
import { UIStore } from "../UIStore";
import Card from "./Card";
import "./BoardGrid.scss";

function layoutCol(cardId) {
  if (cardId == null) {
    return <div></div>;
  }
  return <Card id={cardId} />;
}

function layoutRow(row, i) {
  return (
    <Row key={i}>
      <Col span={6} className={"strategy"}>
        {layoutCol(row[0])}
      </Col>
      <Col span={4} className={"outcome"}>
        {layoutCol(row[1])}
      </Col>
      <Col span={4} className={"outcome"}>
        {layoutCol(row[2])}
      </Col>
      <Col span={4} className={"outcome"}>
        {layoutCol(row[3])}
      </Col>
      <Col span={6} className={"impact"}>
        {layoutCol(row[4])}
      </Col>
    </Row>
  );
}

export default function BoardGrid() {
  const { layout } = useStoreState(UIStore, (s) => ({
    layout: s.layout,
  }));

  const gridContent = layout.map((row, i) => {
    return layoutRow(row, i);
  });

  return <div className={"BoardGrid"}>{gridContent}</div>;
}
