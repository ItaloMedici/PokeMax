import { Container, DropDown, DropDownItem, Item, Items, Logo, Main, NavBar } from "./styles"
import logo from "../../assets/logo.png"
import React, { useEffect, useState } from "react"
import { ArrowDownIcon, ArrowTopLeftIcon, ArrowTopRightIcon, ChevronDownIcon, ChevronUpIcon, GlobeIcon, Link1Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useLanguage } from "../../hooks/useLanguage";
import { Languages } from "../../i18n";
import { useT } from "../../hooks/useT";
import { useThemeToggle } from "../../hooks/useThemeToggle";

const Default = ({ children }: React.PropsWithChildren) => {
  const [dropDownVisible, setDropDownVisible] = useState(false)
  const { changeLanguage } = useLanguage();
  const { getMessage } = useT();
  const { toggleTheme, currentTheme } = useThemeToggle();

  const changeLang = (lang: Languages) => {
    changeLanguage(lang)
    setDropDownVisible(false)
  }

  return (
    <Container>
      <NavBar>
        <a href="https://www.maxmilhas.com.br/" target="_blank" aria-label="MaxMilhas">
          <Logo src={logo} alt="MaxMilhas logo"/>
        </a>
        <Items>
          <Item onClick={() => setDropDownVisible(prev => !prev)}>
            <GlobeIcon />
            {dropDownVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Item>
          {dropDownVisible ? (
            <DropDown>
              <DropDownItem onClick={() => changeLang(Languages.enUS) }>
                {getMessage("english")}
                <ArrowTopRightIcon />
              </DropDownItem>
              <DropDownItem onClick={() => changeLang(Languages.enUS)}>
              {getMessage("portuguese")}
                <ArrowTopRightIcon />
              </DropDownItem>
            </DropDown>
          ): null}
          <Item onClick={() => toggleTheme()}>
            {currentTheme === "light" ? <SunIcon /> : <MoonIcon />}
          </Item>
        </Items>
      </NavBar>
      <Main>
        { children }
      </Main>
    </Container>
  )
}

export { Default }