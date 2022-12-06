import { IRouter } from "../../../routers/interface";

import { MailOutlined } from "@ant-design/icons";
 
export const routerElectricType: IRouter = {
  headerName: 'Electric type',
  path: '/pokemon/electric-type',
  loader: import("./index"),
  name: 'electric-type',  
  exact:true,
  menu:{
    icon: <MailOutlined />,
  },
};