import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { RootStackParamList } from "../../navigation/Rootstack";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import {ButtonTemplate as CustomButton} from '../templates/ButtonTemplate';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Home({ navigation }: Readonly<Props>) {
  const [name, setName] = useState<string>("Default");

  return (
    <View>
      <CustomButton
        mode="contained"
        onPress={() => {
          navigation.navigate("View");
        }}
      >
        Exercice vue
      </CustomButton>
      <TextInput
        mode="outlined"
        value={name}
        onChangeText={(text: string) => {
          setName(text);
        }}
      />
      <CustomButton
        mode="elevated"
        onPress={() => {
          navigation.navigate("StateProps", { nom: name });
        }}
      >
        {name}
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
