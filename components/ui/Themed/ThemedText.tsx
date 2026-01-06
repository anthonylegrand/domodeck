import { Theme } from "@/constants/theme/theme.types";
import { useMemo } from "react";
import { Text as DefaultText } from "react-native";
import { useLocalTheme } from "./useLocalTheme";

type TextType = "default" | "title" | "muted" | "paragraph";

type ThemeProps = { type?: TextType; active?: boolean; bold?: boolean };

type TextProps = DefaultText["props"] & ThemeProps;

export function Text(props: TextProps) {
  const { style, type, active, bold, ...otherProps } = props;
  const theme = useLocalTheme();
  const styles = useMemo(() => createStyles(theme, props), [theme, props]);

  return <DefaultText style={[styles, style]} {...otherProps} />;
}

export const createStyles = (
  theme: Theme,
  props: ThemeProps
): TextProps["style"] => {
  let style = {};

  switch (props.type) {
    case "title":
      style = {
        color: theme.colors.text,
        ...theme.typography.title,
      };
      break;

    case "muted":
      style = { color: theme.colors.muted, ...theme.typography.muted };
      break;

    case "paragraph":
      style = {
        color: theme.colors.text,
        ...theme.typography.paragraph,
      };
      break;

    case "default":
    default:
      style = { color: theme.colors.text, ...theme.typography.body };
      break;
  }

  if (props.active) {
    style = { ...style, color: theme.colors.primary };
  }

  if (props.bold) {
    style = { ...style, fontWeight: "700" };
  }

  return style;
};
