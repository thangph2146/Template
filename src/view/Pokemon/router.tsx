import { IRouter } from "../../routers/interface";
import { MailOutlined } from "@ant-design/icons";
import { routerAllType } from "./AllType/router";
import { routerElectricType } from "./ElectricType/router";

export const routerPokemon: IRouter = {
  headerName: 'Pokedex',
  path: "/pokemon",
  name: "pokemon",  
  exact: false,
  menu: {
    icon: <MailOutlined />,
    activePath: ['/pokemon'],
  },
  routes:[
    routerAllType,  
    routerElectricType
  ]
};
