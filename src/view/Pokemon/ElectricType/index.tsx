/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Card, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonPresenter from "../../../modules/pokemon/presenter";
import { useSingleAsync } from "../../../shared/hook/useAsync";
import "../../Pokemon/index.scss";
const ElectricType = () => {
  const { Meta } = Card;
  const getListPokemonElectric = useSingleAsync(
    PokemonPresenter.getListPokemonElectric
  );
  const loadMorePokemon = useSingleAsync(PokemonPresenter.loadMorePokemon);
  const getListPokemonDetail = useSingleAsync(
    PokemonPresenter.getListPokemonDetail
  );
  const loading = getListPokemonElectric.status;

  const [listPokemonDetail, setListPokemonDetail] = useState<any[]>([]);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    getListPokemonElectric.execute().then((res: any) => {
      res.pokemon.reduce((arr: any[], item: any) => {
        getListPokemonDetail.execute(item.pokemon.name).then((res: any) => {
          setListPokemonDetail((state: any[]) => {
            state = [...state, res];
            state.sort((a, b) => (a.id > b.id ? 1 : -1));
            return state;
          });
        });
      }, []);
    });
  }, []);

  return (
    <div className="Pokemon">
      <div className="electric-type">
        <div className="list-pokemon">
          {loading === "loading" ? (
            <Spin />
          ) : (
            listPokemonDetail
              ?.filter((e) =>
                e.types.find(
                  (el: { type: { name: string } }) =>
                    el.type.name === "electric"
                )
              )
              .map((item: any, index: number) => {
                return (
                  <Card
                    key={index}
                    hoverable
                    style={{ width: "15vw" }}
                    cover={
                      <img
                        alt="example"
                        src={item.sprites.other.home.front_default}
                        onClick={() => console.debug(item)}
                        style={{ height: 200, paddingTop: "1rem" }}
                      />
                    }
                  >
                    <Meta
                      title={item.name}
                      description={item.url}
                      style={{ justifyContent: "center" }}
                    />
                  </Card>
                );
              })
          )}
        </div>
        <Button
          onClick={() => setOffset(offset + 20)}
          style={{ marginTop: "2rem" }}
        >
          {loadMorePokemon.status === "loading" ? <Spin /> : "Load more..."}
        </Button>
      </div>
    </div>
  );
};

export default ElectricType;
