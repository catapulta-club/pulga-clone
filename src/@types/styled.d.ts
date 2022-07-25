import "styled-components";

declare module "styled-components" {
    export interface Border {
      radius: {
        sm: number;
      };
    }
  
    export interface ColorType {
      main: string;
      onMain: string;
    }
  
    export type ColorsType =
      | "primary"
      | "backdrop"
      | "background"
      | "error"
      | "placeholder";
  
    export interface PaletteType {
      primary: ColorType;
      backdrop: ColorType;
      background: ColorType;
      error: ColorType;
      placeholder: ColorType;
    }
  
    export interface TypographyProps {
      fontFamily: string;
      letterSpacing: number;
    }
  
    export interface Typography {
      regular: TypographyProps;
      semiBold: TypographyProps;
      bold: TypographyProps;
    }
  
    export type TypographyType = "regular" | "semiBold" | "bold";
  
    export interface DefaultTheme {
      typography: Typography;
      colors: PaletteType;
      borders: Border;
    }
  }
  