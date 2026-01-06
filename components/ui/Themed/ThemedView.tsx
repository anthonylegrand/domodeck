import { View as DefaultView } from "react-native";
import { useLocalTheme } from "./useLocalTheme";

type ViewType = "background" | "surface";

type ViewProps = DefaultView["props"] & {
  type?: ViewType;
};

export function View(props: ViewProps) {
  const { style, type, ...otherProps } = props;
  const theme = useLocalTheme();

  let backgroundColor = undefined;
  switch (type) {
    case "surface":
      backgroundColor = theme.colors.surface;
      break;

    case "background":
      backgroundColor = theme.colors.background;
      break;

    default:
      break;
  }

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
