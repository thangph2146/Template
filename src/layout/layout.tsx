import React, { PropsWithChildren } from "react";
 
interface IDefaultLayoutProps {
  history: any;
}

const Layout: React.FC<PropsWithChildren<IDefaultLayoutProps>> = (props) => {
  return (
    <div className="all-page-component">
      <div className="right-page-component">
        <div className="w-100 d-flex flex-row-reverse"></div>
        <div className="main-component">{props.children}</div>
      </div>
    </div>
  );
};

export default React.memo(Layout);
