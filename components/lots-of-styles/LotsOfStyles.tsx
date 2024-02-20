import { Text, View } from "react-native";

import { styles } from "./styles";
import type { LotsOfStylesProps } from "./types";

export default function LotsOfStyles({ style, ...props }: LotsOfStylesProps) {
  return (
    <View {...props} style={[styles.container, style]}>
      <Text style={styles.red}>Just red</Text>
      <Text style={styles.bigBlue}>Just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
}
