
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
      colors: {
          primary: string;
          secundary: string;
          text: string;
          title: string;
          subtitle: string;
          actions: {
              error: string;
              warning: string;
              success: string;
          }
      };
  }
}  