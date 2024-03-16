import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/Rootstack";
import {FlatList, StyleSheet, View} from "react-native";
import {ButtonTemplate as CustomButton} from "../templates/ButtonTemplate";
import {useEffect, useState} from "react";
import {Text, TextInput} from "react-native-paper";
import {AnnonceType} from "../../models/AnnonceType";

type Props = NativeStackScreenProps<RootStackParamList>;

function renderAnnonce(annonce : AnnonceType) {
    return (
        <View style={[styles.flatListRow]}>
            <View style={[styles.flatListRowContent]}>
                <Text variant="titleLarge" style={[styles.boldText]}>{annonce.carMake} {annonce.carModel}</Text>
            </View>
            <View style={[styles.flatListRowContent]}>
                <Text variant="bodyMedium" style={styles.italicText}>{annonce.carModelYear} - {annonce.price}</Text>
            </View>
            <View style={[styles.flatListRowContent]}>
                <Text variant="bodyMedium">{annonce.description}</Text>
            </View>
        </View>
    );
}

export default function Accueil({ navigation }: Readonly<Props>) {
    const [annonce, setAnnonce] = useState("");
    const [data, setData] = useState(null);
    const [annoncesNumber, setAnnoncesNumber] = useState(0);

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
                        onPress={() => navigation.navigate("Home")}
                    >
                        TEST PAGE
                    </CustomButton>
                </View>
            </View>

            <View style={styles.buttonRow}>
                <View style={styles.column}>
                    <CustomButton
                        mode="contained"
                        onPress={() => {
                            navigation.navigate("View");
                        }}
                    >
                        Mes favoris :
                    </CustomButton>
                </View>
            </View>

            <View style={styles.inputRow}>
                <TextInput
                    style={[styles.textInput]}
                    mode="outlined"
                    placeholder={"Rechercher une voiture"}
                    value={annonce}
                    onChangeText={(text: string) => {
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
                        renderItem={({item}) => renderAnnonce(item)}
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