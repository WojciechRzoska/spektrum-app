import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      dataBackground: string;
      green: string;
      darkGreen: string;
      darkBlue: string;
      black: string;
      white: string;
      red: string;
    };
  }
}
