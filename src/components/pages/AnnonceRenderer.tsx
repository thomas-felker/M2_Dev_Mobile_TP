import {TypeAnnonce} from "../../models/TypeAnnonce";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Text} from "react-native-paper";
import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/Rootstack";

type Props = NativeStackScreenProps<RootStackParamList>;

export function renderAnnonce(annonce : TypeAnnonce, props: Readonly<Props>) {
    return (
        <View style={[styles.flatListRow]}>
            <TouchableOpacity
                onPress={(): void => {
                    return props.navigation.navigate('Annonce', {currentAnnonce: annonce})
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