import { TextStyle, ViewStyle } from "react-native";

export type Theme = {
  colors: {
    background: string;
    surface: string;
    primary: string;
    text: string;
    muted: string;
  };
  spacing: {
    s: number;
    m: number;
    l: number;
  };
  radius: {
    s: number;
    m: number;
  };
  typography: {
    body: TextStyle;
    title: TextStyle;
    muted: TextStyle;
    paragraph: TextStyle;
  };
  components: {
    mainTitle: {
      style: TextStyle;
      text?: string;
    };
    dashboardNavbar: {
      container: ViewStyle;
      element: ViewStyle;
      text: TextStyle;
      textSelected: TextStyle;
    };
    tileContainer: ViewStyle;
    tileCard: {
      container: ViewStyle;
      title: TextStyle;
      description: TextStyle;
    };
  };
};
