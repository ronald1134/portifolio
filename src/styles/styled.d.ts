// augmentação de tipos para styled-components
import "styled-components";
import { ThemeType  } from "./themes/default";

declare module "styled-components" {
    // informa ao TS o formato de props.theme
    export interface DefaultTheme extends ThemeType  { }
}
