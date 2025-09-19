import { ThemeProvider as JssThemeProvider } from "react-jss";
import { theme } from "src/theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <JssThemeProvider theme={theme}>{children}</JssThemeProvider>;
}