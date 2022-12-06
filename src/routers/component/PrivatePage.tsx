import React from "react";
import { privateRouter } from "../index";
import ShowRouter from "./ShowRouter";
import { Routes } from "react-router-dom";
import DefaultLayout from "../../layout/index";
 
const PrivatePage: React.FC = () => {
  return (
    <Routes>
      {ShowRouter({ routers: privateRouter, MasterLayout: DefaultLayout })}
    </Routes>
  );
};
export default PrivatePage;
