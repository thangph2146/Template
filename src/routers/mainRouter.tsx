import { routerForgotPassword } from "../view/Auth/ForgotPassword/router";
import { routerLogin } from "../view/Auth/Login/router";
import { routerRegister } from "../view/Auth/Register/router";
import { routerHome } from "../view/Home/router";
import { routerPokemon } from "../view/Pokemon/router";
import { IRouter } from "./interface";

export const privatePage: IRouter[] = [routerHome, routerPokemon];
export const publicPage: IRouter[] = [
  routerLogin,
  routerRegister,
  routerForgotPassword,
];
