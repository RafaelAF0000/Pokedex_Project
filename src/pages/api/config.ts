import axios from "axios";

export const baseURL: string = "https://pokeapi.co/api/v2/";

// Definindo para a variável api o esqueleto de acesso na baseURL
export const api = axios.create({
  baseURL,
});
