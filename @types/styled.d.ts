import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secundary: string;
      background: string;
      text: string;
      title: string;
      subtitle: string;
      actions: {
        error: string;
        warning: string;
        success: string;
      };
    };
  }
}
