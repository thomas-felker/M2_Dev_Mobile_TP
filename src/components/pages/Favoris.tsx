import React, {ReactNode} from "react";
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/Rootstack";
import {useSelector} from "react-redux";
import {RootState} from "../../slice/FavorisSlice";
import {TypeAnnonce} from "../../models/TypeAnnonce";
import {Text} from "react-native-paper";
import {renderAnnonce} from "./AnnonceRenderer";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Favoris(props: Readonly<Props>): ReactNode {
    const favoris: TypeAnnonce[] = useSelector((state: RootState) => state.favoris)

    return (
        <View style={[styles.container]}>
            {favoris.length > 0 ? (
                <View>
                    <FlatList
                        data={favoris}
                        renderItem={({item}) => renderAnnonce(item, props.navigation)}
                    />
                </View>
            ) : (
                <View style={[styles.noFavoriteRow]}>
                    <Text variant="titleLarge">Vous n'avez aucun favori !</Text>
                </View>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        marginHorizontal: 20,
        flex: 1
    },
    buttonRow: {
        flexDirection: 'row',
        marginVertical: 30
    },
    inputRow: {
        flexDirection: 'row',
        marginVertical: 10
    },
    textInput: {
        flex: 1,
        backgroundColor: "white"
    },
    annoncesNumberText: {
        marginVertical: 10,
        fontStyle: 'italic'
    },
    column: {
        flex: 1,
        alignItems: 'center'
    },
    flatListRow: {
        marginVertical: 5
    },
    flatListRowContent: {
        flexDirection: 'row',
        flex:1
    },
    boldText: {
        fontWeight: 'bold'
    },
    italicText: {
        fontStyle: 'italic'
    },
    noFavoriteRow: {
        flexDirection: 'row',
        marginVertical: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
});