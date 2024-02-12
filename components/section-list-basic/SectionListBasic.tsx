import { SectionList, Text, View } from "react-native";
import { styles } from "./styles";

const sections = [
  {
    title: "D",
    data: ["Devin", "Dan", "Dominic"],
  },
  {
    title: "J",
    data: ["Jackson", "James", "Jillian", "Jimmy", "Joel", "John", "Julie"],
  },
];

export default function SectionListBasic() {
  return (
    <View style={styles.container}>
      <SectionList
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        sections={sections}
      />
    </View>
  );
}
