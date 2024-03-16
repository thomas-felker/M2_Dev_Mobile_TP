import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/Rootstack";
import {StyleSheet, View} from "react-native";
import {TypeAnnonce} from "../../models/TypeAnnonce";
import React, {ReactNode, useState} from "react";
import {Text} from "react-native-paper";
import {ButtonTemplate as CustomButton} from "../templates/ButtonTemplate";
import { Avatar } from 'react-native-paper';
import {useDispatch, useSelector} from "react-redux";
import {addFavoris, removeFavoris, RootState} from "../../slice/FavorisSlice";

type Props = NativeStackScreenProps<RootStackParamList>;
export type AnnonceParams = {
    currentAnnonce: TypeAnnonce;
};

export default function Annonce(props: Readonly<Props>): ReactNode {
    const favoris = useSelector((state: RootState) => state.favoris);
    const dispatch = useDispatch();

    let params: AnnonceParams = props.route.params as AnnonceParams;
    const currentAnnonce: TypeAnnonce = params.currentAnnonce;
    const [isFavoris, setIsFavoris] =
        useState(favoris.find(elem => elem.id == currentAnnonce.id) != undefined);
    function addToFavoris() {
        dispatch(addFavoris(currentAnnonce));
        setIsFavoris(true);
    }

    function removeFromFavoris() {
        dispatch(removeFavoris(currentAnnonce));
        setIsFavoris(false)
    }

    return (
        <View style={[styles.container]}>
            <View style={styles.topContainer}>
                <View style={[styles.titleRow]}>
                    <Text
                        variant="headlineSmall"
                        style={[styles.boldText]}
                    >
                        {currentAnnonce.carMake} {currentAnnonce.carModel}
                    </Text>
                </View>

                <View style={[styles.contentRow]}>
                    <View style={[styles.subContentRow]}>
                        <Text
                            variant="titleMedium"
                            style={[styles.boldText]}
                        >
                            Information :
                        </Text>
                    </View>
                    <View style={[styles.subContentRow]}>
                        <Text>Prix : {currentAnnonce.price}</Text>
                    </View>
                    <View style={[styles.subContentRow]}>
                        <Text>Année de fabrication : {currentAnnonce.carModelYear}</Text>
                    </View>
                </View>

                <View style={[styles.contentRow]}>
                    <View style={[styles.subContentRow]}>
                        <Text
                            variant="titleMedium"
                            style={[styles.boldText]}
                        >
                            Vendeur :
                        </Text>
                    </View>
                    <View style={[styles.subContentRow]}>
                        <View style={styles.vendeurAvatarColumn}>
                            <Avatar.Image source={{uri:(currentAnnonce.avatar)}}/>
                        </View>

                        <View style={styles.vendeurTextColumn}>
                            <Text variant="bodyLarge">{currentAnnonce.saler}</Text>

                            <View style={styles.vendeurTextRow}>
                                <View style={styles.vendeurTextColumn}>
                                    <Text style={{fontSize:10}}>Pays : {currentAnnonce.country}</Text>
                                </View>
                                <View style={styles.vendeurTextColumn}>
                                    <Text style={{fontSize:10}}>Ville : {currentAnnonce.city}</Text>
                                </View>
                                <View style={styles.vendeurTextColumn}>
                                    <Text style={{fontSize:10}}>Tel. {currentAnnonce.phone}</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={[styles.contentRow]}>
                    <View style={[styles.subContentRow]}>
                        <Text
                            variant="titleMedium"
                            style={[styles.boldText]}
                        >
                            Description :
                        </Text>
                    </View>
                    <View style={[styles.subContentRow]}>
                        <Text>{currentAnnonce.description}</Text>
                    </View>
                </View>

            </View>

            {!isFavoris ? (
            <View style={styles.bottomContainer}>
                <CustomButton
                    onPress={() => {addToFavoris()}}
                >
                    Ajouter aux favoris
                </CustomButton>
            </View>
            ) : (
                <View style={styles.bottomContainer}>
                    <CustomButton
                        onPress={() => {removeFromFavoris()}}
                    >
                        Supprimer des favoris
                    </CustomButton>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        marginHorizontal: 20,
        flex: 1
    },
    topContainer: {
        flex: 2
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleRow: {
        flexDirection: 'row',
        marginVertical: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentRow:  {
        marginVertical: 10,
    },
    subContentRow: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    },
    boldText: {
        fontWeight: 'bold'
    },
    vendeurRow: {

    },
    vendeurAvatarColumn: {
        marginRight: 10
    },
    vendeurTextColumn: {
        flex: 1
    },
    vendeurTextRow: {
        flexDirection: 'row'
    },
});