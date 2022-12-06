import { IRouter } from "../../../routers/interface";

 
export const routerRegister: IRouter = {
  path: '/register',
  exact:true,
  loader: import("./index"),
  name: 'register.name', //translate here for breadcrumb and sidebar
};