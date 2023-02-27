import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
  margin: ${theme.space(4)} 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${theme.space(6)};
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.space(6)};
`

export const LoadMoreButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.space(2)};
  font-size: 12px;
  padding: ${theme.space(2)};
  border-radius: ${theme.borderRadius("md")};
  
  color: ${theme.color("grey800")};
  transition: all .2s ease-in-out;

  :hover {
    color: ${theme.color("primary")};
  }
`