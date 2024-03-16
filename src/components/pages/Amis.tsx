import { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "react-native-paper";
import { TextInputTemplate as TextInputCustom } from "../templates/TextInputTemplate";
import { FabTemplate as FabCustom } from "../templates/FabTemplate";
import { ButtonTemplate } from "../templates/ButtonTemplate";
import { Personne } from "../../models/Personne";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, addPersonne, removePersonne, store } from "../../slice/FavorisSlice";

function renderAmi(ami : Personne) {
    return (
        <View>
            <View style={{flexDirection: 'row', flex:1, justifyContent:'space-around'}}>
                <Text variant="headlineMedium">{ami.prenom} </Text>
                <Text variant="headlineMedium">{ami.nom}</Text>
                <FabCustom style={{alignSelf: 'flex-end'}} icon={'trash-can'} onPress={() => store.dispatch(removePersonne(ami))}/>
            </View>
            <Text style={{flex:1}}>{ami.age} ans</Text>
        </View>
    );
}

export default function Amis() {
    const [nom, setNom] = useState<string>("");
    const [prenom, setPrenom] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [id, setId] = useState<number>(0);

    const dispatch = useDispatch();
    const lAMIS = useSelector((state: RootState) => state.favoris)

    function replaceToInt(id : string) {
        if (id === '') {
            id = '0';
        }
        return parseInt(id);
    }
    
    function addFriend() {
        const friend : Personne = { id: id, prenom: prenom, nom:nom, age:age };
        dispatch(addPersonne(friend));
        setId(id+1);
    }

    return (
        <View style={{flex:1}}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.firstRowItem}>Id : </Text>
                    <TextInputCustom disabled style={styles.textInputRow} value={id.toString()} keyboardType="numeric" onChangeText={(text) => setId(replaceToInt(text))}/>
                </View>
                <View style={styles.row}>
                    <Text style={styles.firstRowItem}>Prénom : </Text>
                    <TextInputCustom style={styles.textInputRow}value={prenom} onChangeText={(prenom : string) => setPrenom(prenom)}/>
                </View>
                <View style={styles.row}>
                    <Text style={styles.firstRowItem}>Nom : </Text>
                    <TextInputCustom style={styles.textInputRow} value={nom} onChangeText={(nom : string) => setNom(nom)}/>
                </View>
                <View style={styles.row}>
                    <Text style={styles.firstRowItem}>Age : </Text>
                    <TextInputCustom style={styles.textInputRow} value={age.toString()} keyboardType="numeric" onChangeText={(text) => setAge(replaceToInt(text))}/>
                </View>
            </View>
            <ButtonTemplate onPress={() => {
                addFriend();
            }}>Ajouter à mes amis</ButtonTemplate>
            <View style={styles.container}>
                <FlatList
                    data={lAMIS}
                    renderItem={({item}) => renderAmi(item)}></FlatList>
            </View>
         </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexWrap:'nowrap'
    },
    row: {
        flexDirection: 'row', 
        flex:1,
        alignContent: 'center',
        alignItems: 'center',
    },
    firstRowItem : {
        flex:1,
    },
    textInputRow : {
        flex:4,
    }
  });
  