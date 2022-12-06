import { IRouter } from "../../../routers/interface";

import { MailOutlined } from "@ant-design/icons";
 
export const routerAllType: IRouter = {
  headerName: 'All type',
  path: '/pokemon/all-type',
  loader: import("./index"),
  exact:true,
  name: 'all-type',  
  menu:{
    icon: <MailOutlined />,
    activePath: ['/pokemon/all-type']
  },
};