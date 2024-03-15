import { View, StyleSheet } from "react-native";
import { RootStackParamList } from "../../navigation/Rootstack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Text } from "react-native-paper";

type EntityProps = {};

type StatePropsProps = EntityProps &
  NativeStackScreenProps<RootStackParamList, "StateProps">;

export default function StateProps(props: Readonly<StatePropsProps>) {
  const [localName, setLocalName] = useState<string>("Bonjour");
  console.log("Name local : " + localName);

  useEffect(() => {
    setLocalName(props.route.params.nom);
  }, []);

  return (
    <View>
      <Text variant="headlineLarge"> {localName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
