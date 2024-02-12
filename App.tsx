import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { ScrollViewBasic } from "@/components/scrollview-basic";

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
      <ScrollViewBasic />
      <StatusBar style="auto" />
    </View>
  );
}
