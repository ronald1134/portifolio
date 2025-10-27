import "styled-components";
import { ThemeType  } from "./themes/default";

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType  { }
}
