import React, { memo } from "react";
import { useIntl } from "react-intl";
import { IRouter } from "../../../routers/interface";

import BreadcrumbComponent from "./BreadcumbComponent";
import TitleComponent from "./TitleComponent/index";

export interface IBreadcrumbs {
  name: string;
  href?: string;
}
interface props {
  classTitle?: string;
  classBreadcrumbs?: string;
  title?: any;
  breadcrumbs?: IRouter | Array<IRouter>;
}
const MainTitleComponent = ({
  classTitle = "",
  classBreadcrumbs = "",
  title = "",
  breadcrumbs,
}: props) => {
  
  return (
    <div className="main-title-breadcrumb__box">
      {breadcrumbs ? (
        <BreadcrumbComponent
          breadcrumbs={breadcrumbs}
          className={classBreadcrumbs}
        />
      ) : (
        ""
      )}
      <TitleComponent title={title} className={classTitle} />
    </div>
  );
};

export default memo(MainTitleComponent);
