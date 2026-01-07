import { Theme } from "./theme.types";

export const defaultTheme: Theme = {
  colors: {
    background: "#FFFFFF",
    surface: "#F5F5F5",
    primary: "#3B82F6",
    text: "#111827",
    muted: "#8C8C96",
    border: "#E5E7EB",
  },
  spacing: { s: 8, m: 16, l: 24 },
  radius: { s: 8, m: 12 },
  typography: {
    body: { fontSize: 16, lineHeight: 22 },
    title: { fontSize: 24, fontWeight: "700" },
    muted: { fontSize: 13, lineHeight: 16 },
    paragraph: { fontSize: 14, lineHeight: 20 },
  },
  components: {
    mainTitle: {
      style: {
        fontSize: 32,
        lineHeight: 40,
      },
    },
    dashboardNavbar: {
      container: { paddingVertical: 18 },
      element: { paddingRight: 18 },
      text: {},
      textSelected: {
        borderBottomWidth: 2,
        borderBottomColor: "#3B82F6",
        paddingBottom: 8,
      },
    },
    tileContainer: {
      display: "flex",
      style: {},
    },
    tileCard: {
      container: {},
      description: {},
      title: {},
    },
  },
};
