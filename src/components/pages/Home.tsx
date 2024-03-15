import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { RootStackParamList } from "../../navigation/Rootstack";
import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Home({ navigation }: Readonly<Props>) {
  const [name, setName] = useState<string>("Default");

  return (
    <View>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("View");
        }}
      >
        Exercice vue
      </Button>
      <TextInput
        mode="outlined"
        value={name}
        onChangeText={(text: string) => {
          setName(text);
        }}
      />
      <Button
        mode="elevated"
        onPress={() => {
          navigation.navigate("StateProps", { nom: name });
        }}
      >
        {name}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
