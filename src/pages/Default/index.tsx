import { Container, Logo, NavBar } from "./styles"
import logo from "../../assets/logo.png"
import React, { useEffect, useState } from "react"
import { GlobeIcon, SunIcon } from "@radix-ui/react-icons";

const Default = ({ children }: React.PropsWithChildren) => {
  const [fixedNavbar, setFixedNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.pageYOffset;
      console.log(scroll)
      if (scroll > 0 && !fixedNavbar) {
        setFixedNavbar(true);
      } else if (scroll === 0 && fixedNavbar) {
        setFixedNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fixedNavbar]);

  return (
    <Container>
      <NavBar fixed={false}>
        <a href="https://www.maxmilhas.com.br/" target="_blank" aria-label="MaxMilhas">
          <Logo src={logo} alt="MaxMilhas logo"/>
        </a>
        <GlobeIcon />
        <SunIcon />
      </NavBar>
      { children }
    </Container>
  )
}

export { Default }