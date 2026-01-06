import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Platform, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useLocalTheme, View } from "./Themed";

interface Props {
  children: React.ReactNode;
}

export const PageContainer = ({ children }: Props) => {
  const insets = useSafeAreaInsets();
  const theme = useLocalTheme();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (
      Platform.OS === "android" &&
      typeof NavigationBar.setButtonStyleAsync === "function"
    ) {
      NavigationBar.setButtonStyleAsync("dark");
    }
  }, []);

  const designPadding =
    width >= 1024
      ? theme.spacing.l
      : width >= 768
      ? theme.spacing.m
      : theme.spacing.m;

  return (
    <View
      type="background"
      style={{
        flex: 1,
        paddingTop: insets.top + designPadding,
        paddingBottom: insets.bottom + designPadding,
        paddingLeft: insets.left + designPadding,
        paddingRight: insets.right + designPadding,
      }}
    >
      {children}
      <StatusBar style={"auto"} />;
    </View>
  );
};
