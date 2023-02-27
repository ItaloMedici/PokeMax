import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  background: ${theme.color("background")};
  width: 100vw;
  position: relative;
  min-height: 100vh;
  max-width: 100vw;

`

export const NavBar = styled.nav`
  display: flex;
  
  transition: all 0.3s ease-out;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${theme.color("grey400")};
  padding: ${theme.space(1)} ${theme.space(12)};

  justify-content: space-between;
  align-items: center;
  color: ${theme.color("textColor")};

  ${theme.breakpoint("lg")} {
    padding: ${theme.space(1)} ${theme.space(40)};
  } 

  ${theme.breakpoint("2xl")} {
    padding: ${theme.space(1)} ${theme.space(50)};
  }
`


export const Logo = styled.img`
  width: ${theme.space(7)};
  height: ${theme.space(7)};
`

export const Items = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space(4)};
  margin-left: auto;
`

export const Item = styled.button`
  all: unset;
  cursor: pointer;
  padding: ${theme.space(1)};
  line-height: 0;
  display: flex;
  gap: ${theme.space(1)};
  border-radius: ${theme.borderRadius("sm")};

  transition: background-color .2s ease-in-out;

  :hover {
    background: ${theme.color("grey300")};
  }
`

export const DropDown = styled.ul`
  position: absolute;
  top: ${theme.space(9)};
  background: ${theme.color("grey25")};
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  padding: ${theme.space(3)};
  border-radius: ${theme.borderRadius("sm")};

  display: flex;
  flex-direction: column;
  gap: ${theme.space(2)};

`

export const DropDownItem = styled.li`
  all: unset;
  font-size: 14px;
  color: ${theme.color("grey600")};
  display: flex;
  align-items: center;
  gap: ${theme.space(2)};
  
  transition: all .2s ease-in-out;

  cursor: pointer;

  :hover {
    color: ${theme.color("grey900")};
  }
`



export const Main = styled.main`
  padding: ${theme.space(12)} ${theme.space(12)};
  
  ${theme.breakpoint("lg")} {
    padding: ${theme.space(12)} ${theme.space(40)};
  } 

  ${theme.breakpoint("2xl")} {
    padding: ${theme.space(12)} ${theme.space(50)};
  }
`