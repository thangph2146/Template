import React from "react";
import { publicRouter } from "../index";
import ShowRouter from "./ShowRouter";
import { Routes } from "react-router-dom";

const PublicPage: React.FC = () => {
  return (
      <Routes>{ShowRouter({ routers: publicRouter  })}</Routes>
  );
};
export default PublicPage;
