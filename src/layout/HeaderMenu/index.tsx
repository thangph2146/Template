import { Button, Descriptions, Image, PageHeader } from "antd";
import React from "react";

const HeaderMenu: React.FC = () => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
          <Image
            preview={false}
            style={{ borderRadius: "50%", width: "3rem", height: "3rem" }}
            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/300000042_833905351324777_8033569560520014629_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eft-5c9EcWkAX8dE-Ie&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBcjCUqiJf8wYAAuWQ9sibke0tK7OF65LBbpMbphJ7p1Q&oe=6367822B"
          />,
        ]}
      ></PageHeader>
    </div>
  );
};

export default HeaderMenu;
