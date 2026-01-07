import { Theme } from "@/constants/theme/theme.types";
import { useMemo } from "react";
import { View as DefaultView } from "react-native";
import { useLocalTheme } from "./useLocalTheme";

type ViewType = "background" | "surface";

export type ViewThemeProps = {
  type?: ViewType;
  border?:
    | {
        width?: number;
        color?: string;
        radius?: "s" | "m";
      }
    | boolean;
};

type ThemeProps = ViewThemeProps;

type ViewProps = DefaultView["props"] & ViewThemeProps;

export function View(props: ViewProps) {
  const { style, type, ...otherProps } = props;
  const theme = useLocalTheme();
  const styles = useMemo(() => createStyles(theme, props), [theme, props]);

  return <DefaultView style={[styles, style]} {...otherProps} />;
}

export const createStyles = (
  theme: Theme,
  props: ThemeProps
): ViewProps["style"] => {
  let style = {};

  switch (props.type) {
    case "surface":
      style = { ...style, backgroundColor: theme.colors.surface };
      break;

    case "background":
      style = { ...style, backgroundColor: theme.colors.background };
      break;

    default:
      break;
  }

  if (props.border) {
    let _border = props.border;
    if (_border === true) _border = {};

    style = {
      ...style,
      borderColor: _border.color ?? theme.colors.border,
      borderWidth: _border.width ?? 1,
      borderRadius: theme.radius[_border.radius || "s"] ?? 8,
    };
  }

  return style;
};
