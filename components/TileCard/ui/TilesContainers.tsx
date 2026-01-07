import { Theme } from "@/components/ui/Themed/theme.types";
import {
  Droplet,
  Lightbulb,
  LightbulbOff,
  Thermometer,
} from "lucide-react-native";
import { useMemo } from "react";
import { ViewStyle } from "react-native";
import { useLocalTheme, View } from "../../ui/Themed";
import { TileCard } from "./TileCard";

const cards = [
  {
    id: "thermo",
    value: "5°C",
    name: "Température",
    icon: <Thermometer />,
    size: 2,
  },
  {
    id: "humidity",
    value: "60%",
    name: "Humidité",
    icon: <Droplet />,
    size: 1,
  },
  {
    id: "kitchen-light",
    value: "off",
    name: "Lumiére du salon",
    icon: <LightbulbOff />,
    size: 1,
  },
  {
    id: "bedroom-light",
    value: "off",
    name: "Lumiére de la chambre",
    icon: <LightbulbOff />,
  },
  {
    id: "bathroom-light",
    value: "on",
    name: "Lumiére de salle de bain",
    icon: <Lightbulb />,
  },
];

export const TilesContainers = () => {
  const theme = useLocalTheme();
  const style = useMemo(() => theme.components.tileContainer, [theme]);
  const _flexStyle = getFlexStyle(style.display);

  return (
    <View style={[_flexStyle, style.style]}>
      {cards.map((card, i) => (
        <TileCard key={i} card={card} />
      ))}
    </View>
  );
};

function getFlexStyle(
  flexStyle: Theme["components"]["tileContainer"]["display"]
): ViewStyle {
  const base: ViewStyle = { display: "flex", gap: 10 };
  if (!flexStyle) return base;

  if (flexStyle === "col") return { ...base, flexDirection: "column" };
  if (flexStyle === "flex")
    return { ...base, flexDirection: "row", flexWrap: "wrap" };

  return base;
}
