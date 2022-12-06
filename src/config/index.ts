import ISelect from "../core/select";

export const LANGUAGE: ISelect[] = [
  { value: "en", label: "ENG" },
  { value: "vi", label: "VNM" },
];

const CONFIG = {
  API_BASE_URL: process.env.API_BASE_URL || "https://metanode.co/",
  APP_NAME: process.env.APP_NAME || "Poke_Desk",
  LOGIN_PAGE: "/#",
  SSO_PAGE: "/#",
};

export default CONFIG;
