import { Selector } from "@reduxjs/toolkit";
import { RootState } from "../modules";
export type IRouter = {
  headerName?: string;
  loader?: Promise<object> | any;
  path: string;
  permissionCode?: string | "ALLOW";
  component?: React.FC<any> | any;
  isPrivate?: boolean;
  exact: boolean;
  name?: string;
  masterLayout?: boolean;
  menu?: {
    icon?: React.ReactNode;
    hideInNavbar?: boolean;
    exact?: boolean;
    activePath?: string[];
    generatePath?: (params: any) => string;
    selector?: Selector<RootState, any>;
  };
  routes?: Array<IRouter>;
};
