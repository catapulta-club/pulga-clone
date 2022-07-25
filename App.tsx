import { useFonts } from "expo-font";
import App from "./src";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/styles/theme";
import { fonts } from "./src/styles/fonts";

export default function Main() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
