import React from "react";
import { useStoreState } from "pullstate";
import { UIStore } from "./UIStore";
import { Col, Row, Dropdown, Button, Menu, message, Typography } from "antd";
import {
  DownOutlined,
  // BranchesOutlined,
  // ProjectOutlined,
  // PartitionOutlined,
  OneToOneOutlined,
} from "@ant-design/icons";
const { Title } = Typography;
import "./MainHeader.scss";

// function handleButtonClick(e) {
//   console.log("click left button", e);
// }

function handleMenuClick(e) {
  const m = "Switching to pathway " + e.key + " is not implemented";
  message.warning(m);
}

// const menu = (
//   <Menu onClick={handleMenuClick}>
//     <Menu.Item key="1" icon={<OneToOneOutlined />}>
//       1 - First pathway
//     </Menu.Item>
//     <Menu.Item key="2" icon={<PartitionOutlined />}>
//       2 - Second pathway
//     </Menu.Item>
//     <Menu.Item key="3" icon={<ProjectOutlined />}>
//       3 - Second pathway
//     </Menu.Item>
//     <Menu.Item key="4" icon={<BranchesOutlined />}>
//       4 - Living Income
//     </Menu.Item>
//   </Menu>
// );

const pathWayMenu = (pathWays) => {
  const menuItems = Object.values(pathWays).map((pathWay) => (
    <Menu.Item key={pathWay.id} icon={<OneToOneOutlined />}>
      {pathWay.id} - {pathWay.title}
    </Menu.Item>
  ));
  return <Menu onClick={handleMenuClick}>{menuItems}</Menu>;
};

export default function MainHeader() {
  const { activePathWayId, pathWays, title } = useStoreState(UIStore, (s) => ({
    activePathWayId: s.activePathWayId,
    pathWays: s.pathWays,
    title: s.title,
  }));

  if (activePathWayId == null || pathWays == null || title == null) {
    return <Row className={"MainHeader"}></Row>;
  }

  const activePathWay = pathWays[activePathWayId];
  const theMenu = pathWayMenu(pathWays);

  return (
    <Row className={"MainHeader"}>
      <Col flex="auto" className={"MainHeaderLeft"}>
        <Title level={1}>Theory of Change / {title}</Title>
      </Col>
      <Col flex="1 1 400px" className={"MainHeaderRight"}>
        Select PATHWAY:
        <Dropdown overlay={theMenu} className={"pathWayDropdown"}>
          <Button>
            <DownOutlined /> {activePathWay.id} - {activePathWay.title}
          </Button>
        </Dropdown>
      </Col>
    </Row>
  );
}
