import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.form`
  display: flex;
  align-items: center;
  gap: ${theme.space(2)};

  background: ${theme.color("grey50")};
  border: 1px solid ${theme.color("grey400")};
  border-radius: ${theme.borderRadius("md")};
  padding: ${theme.space(1)};
  color: ${theme.color("textColor")};

  :focus-within {
    outline: 2px solid ${theme.color("grey300")}
  }
`

export const Input = styled.input`
  all: unset;
  flex: 1;
  font-size: 14px;
  margin-left: ${theme.space(2)};
`

export const Submit = styled.button`
  all: unset;
  cursor: pointer;

  display: flex;
  align-items: center;

  padding: ${theme.space(1)};
  background: ${theme.color("grey200")};
  border: 1px solid ${theme.color("grey400")};
  color: ${theme.color("iconColor")};
  border-radius: ${theme.borderRadius("sm")};
  line-height: 0;

  transition: background-color .3s ease-in-out;
  transition: max-width .6s ease-in-out;

  max-width: 15px;
  overflow: hidden;

  span {
    font-size: 10px;
    margin-left: 4px;
  }

  :hover {
    background: ${theme.color("grey300")};
    max-width: 200px;

  }
`

