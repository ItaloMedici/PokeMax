import { useEffect, useRef, useState } from "react";
import { Grid } from "../../components/grid/Grid";
import { Search } from "../../components/search/Search";
import { Pokemon } from "../../models/Pokemon";
import { PokemonService } from "../../service/PokemonService";
import { Container } from "./styles";

const Home = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const offset = useRef(0);

  useEffect(() => {
    findPokemonsOffset();
  }, []);

  const findPokemonsOffset = async () => {
    const pokemons = await PokemonService.findOffset(offset.current);
    setData(pokemons);
  };

  const onQueryClear = () => {
    if (data.length === 0) {
      findPokemonsOffset();
    }
  };

  const handleSearch = async (query: string) => {
    offset.current = 0;
    if (query.length === 0) {
      findPokemonsOffset();
    } else if (query.length > 0) {
      const pokemon = await PokemonService.getPokemonByQuery(query);
      if (pokemon) {
        setData([pokemon]);
      } else {
        setData([]);
        // not found
      }
    }
  };

  const loadMore = async () => {
    offset.current += 10;
    const pokemons = await PokemonService.findOffset(offset.current);
    setData(prev => Array.from([...prev, ...pokemons]));
  }

  return (
    <Container>
      <Search onSubmit={handleSearch} onClear={onQueryClear} />
      <Grid
        data={data}
        onLoadMore={loadMore}
      />
    </Container>
  );
};

export { Home };

