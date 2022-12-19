import { useThemeStore } from "@/stores/theme";

export default function getTheme() {
  const themeStore = useThemeStore();

  return themeStore.mode;
}
