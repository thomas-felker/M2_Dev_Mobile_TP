import React, {ReactNode} from "react";
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/Rootstack";
import {useSelector} from "react-redux";
import {RootState} from "../../slice/FavorisSlice";
import {TypeAnnonce} from "../../models/TypeAnnonce";
import {Text} from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Favoris({navigation}: Readonly<Props>): ReactNode {
    const favoris: TypeAnnonce[] = useSelector((state: RootState) => state.favoris)

    function renderAnnonce(annonce : TypeAnnonce) {
        return (
            <View style={[styles.flatListRow]}>
                <TouchableOpacity
                    onPress={(): void => {
                        return navigation.navigate('Annonce', {currentAnnonce: annonce})
                    }}
                >
                    <View style={[styles.flatListRowContent]}>
                        <Text variant="titleLarge" style={[styles.boldText]}>{annonce.carMake} {annonce.carModel}</Text>
                    </View>
                    <View style={[styles.flatListRowContent]}>
                        <Text variant="bodyMedium" style={styles.italicText}>{annonce.carModelYear} - {annonce.price}</Text>
                    </View>
                    <View style={[styles.flatListRowContent]}>
                        <Text variant="bodyMedium">{annonce.description}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View>
            {favoris ? (
                <FlatList
                    data={favoris}
                    renderItem={({item}) => renderAnnonce(item)}
                />
            ) : (
                <Text>Chargement des données...</Text>
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
    }
});