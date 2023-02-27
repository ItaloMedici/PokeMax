import { PokemonTypes } from "../../models/PokemonTypes";
import { Container, Desc, Progress, Wrapper } from "./styles";

type ProgessBarProps = {
  value: number;
  stats: string;
  type: PokemonTypes;
};

export const ProgressBar = ({ stats, value, type }: ProgessBarProps) => {
  return (
    <Wrapper>
      <Desc>{stats.toUpperCase().replace("-", " ")}</Desc>
      <Container>
        <Progress progess={value} type={type} />
      </Container>
    </Wrapper>
  );
};
