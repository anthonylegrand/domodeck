import React, { useMemo } from "react";

import { Theme } from "@/constants/theme/theme.types";
import { useWindowDimensions, ViewStyle } from "react-native";
import { Text, TouchableOpacity, useLocalTheme } from "../../ui/Themed";

interface Props {
  card: any;
}

export const TileCard = ({ card }: Props) => {
  const theme = useLocalTheme();
  const style = useMemo(() => theme.components.tileCard, [theme]);
  const _flexStyle = getFlexStyle(
    theme.components.tileContainer.display,
    card.size
  );

  return (
    <TouchableOpacity
      style={[_flexStyle, style.container]}
      type="surface"
      border
    >
      {card.icon}
      <Text>{card.name}</Text>
      <Text>{card.value}</Text>
    </TouchableOpacity>
  );
};

const useGridConfig = () => {
  const { width } = useWindowDimensions();
  // 3 colonnes sur téléphone, 5 sur tablette (seuil à 768px)
  const totalCols = width < 768 ? 3 : 5;

  return { totalCols };
};

function getFlexStyle(
  flexStyle: Theme["components"]["tileContainer"]["display"],
  cardSize: number
): ViewStyle {
  const { totalCols } = useGridConfig();
  const widthPercentage = (100 / totalCols) * (cardSize || 1);

  const base: ViewStyle = {
    padding: 10,
  };
  if (!flexStyle) return base;

  if (flexStyle === "col") return { ...base };
  if (flexStyle === "flex")
    // -5 permet de compensser le gap
    return { ...base, flex: 1, minWidth: `${widthPercentage - 5}%` };

  return base;
}
