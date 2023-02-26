import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  background: ${theme.color("background")};
  width: 100vw;
  position: relative;

`

export const NavBar = styled.nav<{ fixed: boolean }>`
  display: flex;
  padding: ${theme.space(2)};
  transition: all 0.3s ease-out;
  border-bottom: 1px solid ${theme.color("background")};

  ${({ fixed }) =>
    fixed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      backdrop-filter: blur(2px) brightness(1.1);
      border-bottom: 1px solid ${theme.color("grey400")};
      z-index: 999;
    `}
`

export const Logo = styled.img`
  width: ${theme.space(7)};
  height: ${theme.space(7)};
`

export const Main = styled.main`
  padding: 0 ${theme.space(12)};
`