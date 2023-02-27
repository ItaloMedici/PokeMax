import styled, { useTheme } from "styled-components";
import { theme } from "../../theme";
import { PokemonTypes } from "../../models/PokemonTypes";
import { adjustHue } from "polished"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  gap: ${theme.space(4)};
  width: 100%;
`

export const Desc = styled.span`
  font-size: 11px;
  color: ${theme.color("grey700")};
`

export const Container = styled.div`
  width: 100%;

  background: ${theme.color("grey300")};
  height: 12px;
  border-radius: ${theme.borderRadius("full")};
  overflow: hidden;
`

export const Progress = styled.div<{ progess: number, type: PokemonTypes }>`
  width: ${({ progess }) => `${progess}%`};
  height: 100%;
  background: ${({ type }) => adjustHue(Math.random() * -50, useTheme().colors[type])}
`