import { Droplet, Thermometer } from "lucide-react-native";
import { useMemo } from "react";
import { useLocalTheme, View } from "../../ui/Themed";
import { TileCard } from "./TileCard";

const cards = [
  { id: "thermo", value: "5°C", name: "Température", icon: <Thermometer /> },
  { id: "humidity", value: "60%", name: "Humidité", icon: <Droplet /> },
];

export const TilesContainers = () => {
  const theme = useLocalTheme();
  const style = useMemo(() => theme.components.tileContainer, [theme]);

  return (
    <View style={{ ...style }}>
      {cards.map((card, i) => (
        <TileCard key={i} card={card} />
      ))}
    </View>
  );
};
