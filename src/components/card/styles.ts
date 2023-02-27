import styled, { useTheme } from "styled-components";
import { transparentize, darken } from "polished"
import { theme } from "../../theme";
import { PokemonTypes } from "../../models/PokemonTypes";

export const Container = styled.li`
  all: unset;
  cursor: pointer;

  width: 200px;
  height: 150px;

  background: ${theme.color("grey25")};
  border-radius: ${theme.borderRadius("lg")};
  padding: ${theme.space(4)};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
  gap: ${theme.space(2)};

  .id {
    position: absolute;
    font-size: 16px;

    font-weight: 800;

    color: ${theme.color("grey50")};

    top: ${theme.space(4)};
    left: ${theme.space(4)};
  }

  transition: all .3s ease-in-out;

  :hover {
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    transform: translateY(-5px);

    img {
      transform: scale(1.2)
    }

    div .glow {
      width: 50px;
      height: 50px;
      filter: blur(30px);

    }
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
`;

export const Image = styled.img`
  height: 70px;
  z-index: 2;

  transition: all .3s ease-in-out;

`

export const Name = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${theme.color("textColor")};
`

export const Glow = styled.div<{ type: PokemonTypes, x: number, y: number }>`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius("full")};
  filter: blur(20px);
  opacity: .85;
  background: ${({ type }) => theme.color(type)};
  position: absolute;
  left: ${({ x }) => `${x}%`};
  top: ${({ y }) => `${y}%`};
  
  transition: all .3s ease-in-out;
`

export const TagsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: ${theme.space(2)};
  width: 100%;
`

export const Tag = styled.span<{ type: PokemonTypes }>`
  background: ${({ type }) => transparentize(0.9, useTheme().colors[type])};
  
  padding: ${theme.space(1)} ${theme.space(2)};
  border-radius: ${theme.borderRadius("sm")};

  font-size: 10px;
  font-weight: 500;
  color: ${({ type }) => darken(0.2, useTheme().colors[type])};

`