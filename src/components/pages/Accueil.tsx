import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/Rootstack";
import {FlatList, StyleSheet, View} from "react-native";
import {ButtonTemplate as CustomButton} from "../templates/ButtonTemplate";
import React, {ReactNode, useEffect, useState} from "react";
import {Text, TextInput} from "react-native-paper";
import {TypeAnnonce} from "../../models/TypeAnnonce";
import {useSelector} from "react-redux";
import {RootState} from "../../slice/FavorisSlice";
import {renderAnnonce} from "./AnnonceRenderer";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Accueil(props: Readonly<Props>): ReactNode {

    const [annonce, setAnnonce] = useState("");
    const [data, setData] = useState(null);
    const [annoncesNumber, setAnnoncesNumber] = useState(0);
    const favoris: TypeAnnonce[] = useSelector((state: RootState) => state.favoris);

    console.log("Number of favorites = " + favoris.length)

    useEffect(() => {
        const jsonData = require('../../data/data.json');
        setData(jsonData);
        setAnnoncesNumber(Object.keys(jsonData).length);
        console.log("Data successfully fetched, " + annoncesNumber + " cars retrieved.")
    }, []);

    return (
        <View style={[styles.container]}>
            <View style={styles.buttonRow}>
                <View style={styles.column}>
                    <CustomButton
                        mode="contained"
                        onPress={(): void => {
                            props.navigation.navigate("Mes favoris");
                        }}
                    >
                        Mes favoris : {favoris.length}
                    </CustomButton>
                </View>
            </View>

            <View style={styles.inputRow}>
                <TextInput
                    style={[styles.textInput]}
                    mode="outlined"
                    placeholder={"Rechercher une voiture"}
                    value={annonce}
                    onChangeText={(text: string): void => {
                        setAnnonce(text);
                    }}
                />
            </View>

            <View>
                <Text style={[styles.annoncesNumberText]}>
                    Nombre d'annonce : {annoncesNumber}
                </Text>
            </View>

            <View>
                {data ? (
                    <FlatList
                        data={data}
                        renderItem={({item}) => renderAnnonce(item, props)}
                    />
                ) : (
                    <Text>Chargement des données...</Text>
                )}
            </View>
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
    }
});