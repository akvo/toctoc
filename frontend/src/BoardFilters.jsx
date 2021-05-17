import React from "react";
import { AutoComplete, Col, Row } from "antd";
import "./BoardFilters.scss";

export default function BoardFilters() {
  const onSelect = (data) => {
    console.log("onSelect", data);
  };
  const onSearch = (query) => {
    console.log("On Search", query);
  };
  const options = [];

  return (
    <Row className={"BoardFilters"}>
      <Col span={24}>
        <AutoComplete
          options={options}
          style={{ width: 300 }}
          onSelect={onSelect}
          onSearch={onSearch}
          placeholder="input here"
        />
      </Col>
    </Row>
  );
}
