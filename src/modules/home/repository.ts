/* eslint-disable import/no-anonymous-default-export */
import httpRepository from "../../core/repository/http";

// API GET
const getListHome = async () => {
  return await httpRepository.execute({
    path: "/api/v2/type/13",
    method: "get",
    showSuccess: false,
    config: { isPrivate: true },
  });
};

export default {
  getListHome,
};
