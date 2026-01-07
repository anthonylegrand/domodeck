import { useMemo } from "react";
import {
  TouchableOpacity as DefaultTouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { createStyles, ViewThemeProps } from "./ThemedView";
import { useLocalTheme } from "./useLocalTheme";

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
