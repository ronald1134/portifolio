// augmentação de tipos para styled-components
import "styled-components";
import { DefaultThemeType } from "./themes/default";

declare module "styled-components" {
    // informa ao TS o formato de props.theme
    export interface DefaultTheme extends DefaultThemeType { }
}
