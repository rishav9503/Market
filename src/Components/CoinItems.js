import React from "react";
import { View,  StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text } from "@ui-kitten/components";
import { shadow } from "../constants/dummydata";
import { TouchableHighlight } from "react-native-gesture-handler";
const CoinItem = ({ coin , onTap}) => (
  <TouchableOpacity onPress={()=> onTap()} style={styles.top}>
    <>
    <View style={styles.coinName}>
      <Image source={{ uri: coin.image }} style={styles.image} />
      <View style={styles.containerNames}>
        <Text style={styles.text}>{coin.name}</Text>
        <Text style={styles.textSymbol}>{coin.symbol}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.textPrice}>${coin.current_price}</Text>
      <Text
        style={[
          styles.pricePercentage,
          coin.price_change_percentage_24h > 0
            ? styles.priceUp
            : styles.priceDown,
        ]}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </Text>
    </View>
    </>
   
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  containerItem: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:'#f3fce8',
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  text: {

  },
  textPrice: {
    fontWeight: "bold",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "#00B589",
  },
  priceDown: {
    color: "#fc4422",
  },
  image: {
    width: 50,
    height: 50,
  },
  textSymbol: {
    color: "#c8cbfa",
    textTransform: "uppercase",
  },
  top: {
    borderRadius: 12,
    marginTop:10,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal:10,
    backgroundColor: '#D1F8AF',
    justifyContent: 'space-between',
    flexDirection: "row",
    ...shadow
},
});

export default CoinItem;