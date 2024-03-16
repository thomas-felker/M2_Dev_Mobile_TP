import {ReactNode} from "react";
import {View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/Rootstack";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Favoris(props: Readonly<Props>): ReactNode {
    return (
        <View></View>
    )
}