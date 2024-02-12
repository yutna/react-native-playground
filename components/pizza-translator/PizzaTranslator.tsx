import React from "react";
import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";

import type { PizzaTranslatorProps } from "./types";

export default function PizzaTranslator({
  onChangeText = undefined,
  placeholder = "Type here to translate",
  text = "",
}: PizzaTranslatorProps) {
  const translatedText = text
    .split(" ")
    .map((word) => word && "🍕")
    .join(" ");

  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.inputControl}
      />
      <Text style={styles.text}>{translatedText}</Text>
    </View>
  );
}
