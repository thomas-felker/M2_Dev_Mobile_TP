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
    <View style={{margin: 5}}>
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
        mode="contained"
        onPress={() => {
          navigation.navigate("StateProps", { nom: name });
        }}
      >
        UseState + UseEffect avec : {name}
      </CustomButton>
      <CustomButton onPress={() => navigation.navigate("Amis")}>
        Aller voir mes amis
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
