import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import React, { PropsWithChildren } from "react";
import HeaderMenu from "./HeaderMenu";

import SideBarComponent from "./Sidebar/index";
interface IDefaultLayoutProps {}

const DefaultLayout: React.FC<PropsWithChildren<IDefaultLayoutProps>> = (
  props
) => {
  return (
    <Layout>
      <HeaderMenu />

      <Layout style={{ flexDirection: "row" }}>
        <SideBarComponent />

        <Content className="site-layout">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default React.memo(DefaultLayout);
