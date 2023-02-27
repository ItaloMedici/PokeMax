import { Pokemon } from "../models/Pokemon";
import { api } from "./api";

export class PokemonService {
  
  static async findOffset(offset = 0): Promise<Array<Pokemon>> {
    const {
      data: { results },
    } = await api.get(`pokemon?offset=${offset}&limit=10`);

    const pokemonsInfo = await Promise.all(
      results.map(async ({ url }: { url: string }) => {
        return await PokemonService.getPokemonByUrl(url);
      })
    );

    return pokemonsInfo;
  }
  
  static async getPokemonByUrl(url: string): Promise<Pokemon> {
    const { data } = await api.get(url);

    return this.buildEntity(data);
  };

  static async getPokemonByQuery(query: string): Promise<Pokemon|undefined> {
    try {
      const { data } = await api.get(`/pokemon/${query.toLowerCase()}`);
      
      return this.buildEntity(data);
    } catch (e) {
      return undefined;
    }
    
  }

  private static buildEntity(data):Pokemon {
    return {
      id: data.id,
      name: data.name,
      imageUrl: data.sprites?.other["official-artwork"]["front_default"],
      types: data.types.map(t => t.type.name),
      stats: data.stats.map(s => ({ name: s.stat.name, value: s["base_stat"] }))
    }; 
  }
}