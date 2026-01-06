import { useThemeStore } from "@/stores/useThemeStore";

export function useLocalTheme() {
  const theme = useThemeStore((s) => s.theme);

  return theme;
}
