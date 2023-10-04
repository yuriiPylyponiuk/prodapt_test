import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./components/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {Constants.expoConfig?.extra?.storybookEnabled ? (
        (AppEntryPoint = require("./.ondevice/storybookScreen").default)
      ) : (
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      )}
    </ThemeProvider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice/storybookScreen").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
