import { IRouter } from '../../routers/interface';
import { MailOutlined } from "@ant-design/icons";

export const routerHome: IRouter  = {
  headerName: 'Trang chủ',
  path: '/',
  exact:true,
  loader: import('./index'),
  name: 'home',
  menu:{
    icon: <MailOutlined />
  },
  masterLayout:true
};
