import React, { useMemo } from "react";

import { TouchableOpacity } from "react-native";
import { Text, useLocalTheme } from "../../ui/Themed";

interface Props {
  card: any;
}

export const TileCard = ({ card }: Props) => {
  const theme = useLocalTheme();
  const style = useMemo(() => theme.components.tileCard, [theme]);

  return (
    <TouchableOpacity style={style.container}>
      {card.icon}
      <Text>{card.name}</Text>
      <Text>{card.value}</Text>
    </TouchableOpacity>
  );
};
