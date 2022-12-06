import React, { PropsWithChildren } from "react";
import { Route } from "react-router-dom";
import { IRouter } from "../interface";

interface IShowRouter {
  routers: IRouter[];
  MasterLayout?: React.FC<PropsWithChildren<any>>;
}

const ShowRouter = ({ routers, MasterLayout }: IShowRouter) => {
  const pages = React.useMemo(() => {
    return routers.map((router: IRouter) => {
      if (!MasterLayout || router.masterLayout === false)
        return (
          <Route
            key={router.path}
            path={router.path}
            element={router.component}
          />
        );

      const DynamicComponent: React.FunctionComponent<any> = router.component;

      return (
        <Route
          key={router.path}
          path={router.path}
          element={
            <MasterLayout>
              <DynamicComponent />
            </MasterLayout>
          }
        />
      );
    });
  }, [MasterLayout, routers]);
  return pages;
};

export default ShowRouter;
