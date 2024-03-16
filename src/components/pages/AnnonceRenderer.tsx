import {TypeAnnonce} from "../../models/TypeAnnonce";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Text} from "react-native-paper";
import React, {ReactNode} from "react";
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../navigation/Rootstack";

type Props = NativeStackScreenProps<RootStackParamList>;

export function renderAnnonce(annonce : TypeAnnonce, navigation: NativeStackNavigationProp<RootStackParamList>): ReactNode {
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

const styles = StyleSheet.create({
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
});