import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { Greetings } from "@/components/greetings";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Greetings />
      <StatusBar style="auto" />
    </View>
  );
}
