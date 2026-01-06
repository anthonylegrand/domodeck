import { PlusCircle } from "lucide-react-native";
import { useCallback, useMemo } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Text, useLocalTheme } from "./ui/Themed";

const PAGES = ["Jardin", "Toilette", "Salle à manger", "Cuisine", "Bureau"];

export const DashboardNavbar = () => {
  const theme = useLocalTheme();
  const style = useMemo(() => theme.components.dashboardNavbar, [theme]);

  const createPage = useCallback(() => {
    console.log("Create page");
  }, []);

  const selectPage = useCallback(() => {
    console.log("Select page");
  }, []);

  const editPage = useCallback(() => {
    console.log("Edit page");
  }, []);

  return (
    <ScrollView horizontal style={style.container}>
      <TouchableOpacity style={style.element} onPress={createPage}>
        <PlusCircle color={style.textSelected.color ?? theme.colors.text} />
      </TouchableOpacity>

      {PAGES.map((page, i) => (
        <TouchableOpacity
          key={i}
          style={style.element}
          onPress={selectPage}
          onLongPress={editPage}
        >
          <Text
            active={i === 0}
            bold={i === 0}
            style={i === 0 ? style.textSelected : style.text}
          >
            {page}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
