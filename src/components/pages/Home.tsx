import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { RootStackParamList } from "../../navigation/Rootstack";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Home({navigation} : Readonly<Props>) {
  return (
    <View>
      <Pressable
        onPress={()=> {
            navigation.navigate('View');
        }}>
        <Text>Exercice View</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
