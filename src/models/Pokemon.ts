import { PokemonTypes } from "./PokemonTypes";

export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
  types: PokemonTypes[]
  stats: { name: string, value: number }[]
}