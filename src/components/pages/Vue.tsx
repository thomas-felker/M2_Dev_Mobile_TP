import { View, StyleSheet } from "react-native";


export default function Vue({navigation} : Readonly<Props>) {
    return (
      <View style={[styles.container, styles.flex]}>
        <View style={[styles.row, styles.flex]}>
          <View style={[styles.itemGreen, styles.flex, styles.margin]}/>
          <View style={[styles.itemOrange, styles.flex, styles.margin]}/>
          <View style={[styles.itemBlue, styles.flex, styles.margin]}/>
          <View style={[styles.itemYellow, styles.flex, styles.margin]}/>
        </View>
        <View style={[styles.row, styles.flex, {alignItems:'center'}]}>
          <View style={[styles.itemBlue, styles.flex, styles.margin]}>
            <View style={[styles.flex, styles.itemRed, styles.margin]}></View>
            <View style={[styles.flex, styles.itemBlack, styles.margin]}></View>
          </View>
          <View style={[styles.box, styles.itemYellow, styles.flex, styles.margin]}/>
          <View style={[styles.box, styles.itemBlue, styles.flex, styles.margin]}/>
          <View style={[styles.box, styles.itemYellow, styles.flex, styles.margin]}/>
          <View style={[styles.box, styles.itemBlue, styles.flex, styles.margin]}/>
          <View style={[styles.box, styles.itemYellow, styles.flex, styles.margin]}/>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container : {
    backgroundColor: 'white',
    flexDirection:'column',
  },
  box: {
    height:75,
    width:100,
  },
  row : {
    flexDirection: 'row',
  },
  itemGreen: {
    backgroundColor:'green',
  },
  itemOrange: {
    backgroundColor:'orange',
  },
  itemBlue: {
    backgroundColor:'blue',
  },
  itemYellow: {
    backgroundColor:'yellow',
  },
  itemRed: {
    backgroundColor: 'red',
  },
  itemBlack: {
    backgroundColor: 'black',
  },
  margin: {
    margin:5,
  },
  flex: {
    flex:1,
  }
})