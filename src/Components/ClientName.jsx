import React from "react";
import {Avatar, Col, Row} from "antd";

const ClientName = (props) => {
  const {url} = props;
  return <Row align="middle" gutter={[8, 0]}>
    <Col xl={6} xxl={2}>
      <Avatar
        src={url}
        shape="square"/>
    </Col>
  </Row>
}
export default ClientName;
