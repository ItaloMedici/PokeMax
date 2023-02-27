import styled, { keyframes } from "styled-components";
import { theme } from "../../theme";

export const Modal = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: hsla(0, 0%, 0%, 0.4);
  backdrop-filter: blur(4px);

  animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} .2s ease-in-out;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};

  transition: visibility .2s ease-in-out;
`

export const DialogWrapper = styled.dialog<{ visible: boolean }>`
  all: unset;
  width: 65vw;
  z-index: 4;
  background: ${theme.color("surface")};
  border-radius: ${theme.borderRadius("md")};

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: ${theme.space(4)};
  padding: ${theme.space(8)};

  animation: ${({ visible }) => (visible ? scaleIn : scaleOut)} .2s ease-in-out;

  ${theme.breakpoint("md")} {
    width: 40vw;
  }

  ${theme.breakpoint("lg")} {
    width: 30vw;
  }

`

export const Image = styled.img`
  width: 250px;

  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
  z-index: 2;
  object-fit: contain;

  transition: transform .3s ease-in-out, filter .3s ease-in-out;

  :hover {
    transform: scale(1.05);
    filter: drop-shadow(6px 8px 8px rgba(0, 0, 0, 0.3));
  }
`

export const Name = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.color("textColor")};

`

export const Title = styled.span`
  font-size: 14px;
  color: ${theme.color("grey700")};
`

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space(2)};
  width: 100%;
`

export const CloseButton = styled.button`
  all: unset;
  cursor: pointer;
  
  svg {
    width: 18px;
    height: 18px;
  }

  color: ${theme.color("iconColor")};

  position: absolute;
  top: ${theme.space(4)};
  right: ${theme.space(4)};

  padding: ${theme.space(1)};
  line-height: 0;

  border-radius: ${theme.borderRadius("full")};2
  color: ${theme.color("grey800")};

  transition: background-color .2s ease-in-out;

  :hover {
    background: ${theme.color("grey200")};
  }
`

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.space(4)};
  align-items: center;
`

const fadeIn = keyframes`
  from {
    background: transparent;
  }
  to {
    background: hsla(0, 0%, 0%, 0.4);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(.5);
  }
  to {
    transform: scale(1);
  }
`;

const scaleOut = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(.5);
  }
`;