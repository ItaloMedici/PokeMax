import React from "react";
import { PokeMaxThemeContext } from "../context/PokeMaxThemeProvider";

export const useThemeToggle = () => React.useContext(PokeMaxThemeContext)
