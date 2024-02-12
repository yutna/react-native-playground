import type { TextInputProps } from "react-native";

export interface PizzaTranslatorProps
  extends Pick<TextInputProps, "onChangeText" | "placeholder"> {
  text?: string;
}
