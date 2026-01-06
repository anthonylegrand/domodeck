import { defaultTheme } from "@/constants/theme/defaultTheme";
import { Theme } from "@/constants/theme/theme.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "./mmkv-instance";

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  updateTheme: (partial: Partial<Theme>) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: defaultTheme,
      setTheme: (theme) => {
        set({ theme });
      },
      updateTheme: (partial) =>
        set((state) => {
          const next = { ...state.theme, ...partial };
          return { theme: next };
        }),
    }),
    {
      name: "domodeck-theme",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
