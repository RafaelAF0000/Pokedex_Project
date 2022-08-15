import { NextApiResponse } from "next";
import { api } from "./config";

// Função de GET para a rota da BaseURL de Pokemon
export async function getPokemon(pokemon: string) {
  api.get(`pokemon/${pokemon}`).then((res) => console.log(res.data));
}

// Função de GET para a rota da BaseURL de Pokemon Generation
export async function getPokemonInterval(
  initialPos: number,
  finalPos: number,
  setState: any,
) {
  api
    .get(`pokemon`, {
      params: {
        offset: initialPos,
        limit: finalPos,
      },
    })
    .then((res) => setState(res.data.results));
}

export async function getPokemonImg(pokemon: string, setState: any) {
  api
    .get(`pokemon/${pokemon}`)
    .then((res) => setState(res.data.sprites.front_default));
}
