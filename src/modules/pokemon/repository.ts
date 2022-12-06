import httpRepository from "../../core/repository/http";

// API GET
const getListPokemon = async () => {
  return await httpRepository.execute({
    path: "/api/v2/pokemon?limit=20&offset=0",
    method: "get",
    showSuccess: false,
    config: { isPrivate: true },
  });
};

const getListPokemonElectric = async () => {
  return await httpRepository.execute({
    path: "/api/v2/type/13",
    method: "get",
    showSuccess: false,
    config: { isPrivate: true },
  });
};
const loadMorePokemon = async (offset: number) => {
  return await httpRepository.execute({
    path: `/api/v2/pokemon/?limit=20&offset=${offset}`,
    method: "get",
    showSuccess: false,
    config: { isPrivate: true },
  });
};
const getListPokemonDetail = async (name: string) => {
  return await httpRepository.execute({
    path: `/api/v2/pokemon/${name}`,
    method: "get",
    showSuccess: false,
    config: { isPrivate: true },
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getListPokemon,
  loadMorePokemon,
  getListPokemonDetail,
  getListPokemonElectric
};
