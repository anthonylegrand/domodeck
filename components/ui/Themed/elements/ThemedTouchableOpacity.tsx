import { useMemo } from "react";
import {
  TouchableOpacity as DefaultTouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useLocalTheme } from "../useLocalTheme";
import { createStyles, ViewThemeProps } from "./ThemedView";

type ThemedTouchableProps = TouchableOpacityProps & ViewThemeProps;

export function TouchableOpacity(props: ThemedTouchableProps) {
  const { style, type, ...otherProps } = props;
  const theme = useLocalTheme();
  const styles = useMemo(
    () => createStyles(theme, props as ViewThemeProps),
    [theme, props]
  );

  return <DefaultTouchableOpacity style={[styles, style]} {...otherProps} />;
}

export default TouchableOpacity;
