import { useThemeStore } from "@/stores/useThemeStore";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const theme = useThemeStore((s) => s.theme);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="dashboard" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="servers"
        options={{
          title: "Servers",
          tabBarIcon: ({ color }) => <TabBarIcon name="server" color={color} />,
        }}
      />
      <Tabs.Screen
        name="options"
        options={{
          title: "Options",
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
