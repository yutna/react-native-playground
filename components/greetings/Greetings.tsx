import { Text } from "react-native";
import type { GreetingsProps } from "./types";

export default function Greetings({ text = "world!" }: GreetingsProps) {
  return <Text>Hello, {text}!</Text>;
}
