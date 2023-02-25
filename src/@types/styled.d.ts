import 'styled-components';
import { PokeMaxTheme } from "../theme";

declare module 'styled-components' {
    export interface DefaultTheme extends PokeMaxTheme {}
}