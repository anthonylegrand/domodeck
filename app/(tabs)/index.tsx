import { DashboardNavbar } from "@/components/DashboardNavbar";
import { TilesContainers } from "@/components/TileCard";
import { Text, useLocalTheme, View } from "@/components/ui/Themed";
import i18n from "@/i18n";

export default function DashboardScreen() {
  const theme = useLocalTheme();

  return (
    <View type="background" style={{ flex: 1 }}>
      <View>
        <Text type="title" style={theme.components.mainTitle.style}>
          {theme.components.mainTitle.text ?? i18n.t("pages_titles.dashboard")}
        </Text>

        <DashboardNavbar />
      </View>

      <TilesContainers />
    </View>
  );
}
