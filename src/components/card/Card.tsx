import { useState } from "react";
import { Pokemon } from "../../models/Pokemon";
import { Dialog } from "../dialog";
import {
  Container,
  Glow,
  Image,
  ImageWrapper,
  Name,
  Tag,
  TagsWrapper,
} from "./styles";
import { useT } from "../../hooks/useT";

type CardProps = {
  pokemon: Pokemon;
  onSelect(): void
};

export const Card = ({ pokemon, onSelect }: CardProps) => {
  const { getMessage } = useT();
  return (
    <>
      <Container key={pokemon.id} onClick={onSelect}>
        <span className="id">{`#${pokemon.id}`}</span>
        <ImageWrapper>
          {pokemon.types.map((type, i) => {
            let x = i === 0 ? Math.ceil(Math.random() * 30) + 10 : 50;
            let y = i === 0 ? Math.ceil(Math.random() * 30) + 30 : 50;

            return <Glow className="glow" key={type} type={type} x={x} y={y} />;
          })}
          <Image src={pokemon.imageUrl} />
        </ImageWrapper>
        <Name>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Name>
        <TagsWrapper>
          {pokemon.types.map((type) => (
            <Tag key={type} type={type}>
              {getMessage(type)}
            </Tag>
          ))}
        </TagsWrapper>
      </Container>
    </>
  );
};
