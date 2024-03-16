import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/Rootstack";
import {StyleSheet, View} from "react-native";
import {ButtonTemplate as CustomButton} from "../templates/ButtonTemplate";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Accueil({ navigation }: Readonly<Props>) {

    return (
        <View style={{margin: 5}}>
            <CustomButton
                mode="contained"
                onPress={() => {
                    navigation.navigate("View");
                }}
            >
                Mes favoris :
            </CustomButton>

            <CustomButton onPress={() => navigation.navigate("Home")}>
                TEST PAGE
            </CustomButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
});