/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Layout, Row } from "antd";
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <Layout style={{height: '50vh'}}>
        <Row gutter={0} style={{height: '100%'}}>
          <Col span={16}></Col>
          <Col span={8}></Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Home;
