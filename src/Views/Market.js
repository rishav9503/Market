

import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	FlatList,
	TextInput,
} from "react-native";
import axios from "axios";
import { shadow } from "../constants/dummydata";

import CoinItem from "../Components/CoinItems";
import BaseComponent from "../Components/BaseComponent";

const Market = () => {
	const [coins, setCoins] = useState([]);
	const [refreshing, setRefreshing] = useState(false);
	const [search, setSearch] = useState("");

	const loadData = async () => {
		const res = await fetch(
			"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
		);
		const data = await res.json();
    console.log('data: ', data);
		setCoins(data.slice(0,3));
	};
    const getWatchListData = async (updatedCoinId) => {
        try {
          const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${updatedCoinId}&order=market_cap_desc&per_page=1&page=1&sparkline=false`
          );
          console.log(response.data)
            //  return response.data;
        } catch (error) {
          console.log(error);
        }
      }

	useEffect(() => {
		loadData();
        // getWatchListData();
	}, []);

	return (
		<BaseComponent >
			<StatusBar backgroundColor="#0e0275" />

			<FlatList
				style={styles.list}
				data={coins.filter(
					(coin) =>
						coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
						coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
				)}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => <CoinItem coin={item} />}
				refreshing={refreshing}
				onRefresh={async () => {
					setRefreshing(true);
					await loadData();
					setRefreshing(false);
				}}
			/>
		</BaseComponent>
	);
};

const styles = StyleSheet.create({

	header: {
		flexDirection: "row",
		width: "90%",
		justifyContent: "space-between",
		marginBottom: 10,
	},
	title: {
		fontSize: 20,
		color: "#fff",
		marginTop: 10,
	},
	list: {
		width: "100%",
	},
	searchInput: {
		color: "#fff",
		borderBottomColor: "#c8cbfa",
		borderBottomWidth: 1,
		width: "40%",
		textAlign: "left",
	},
     top: {
        borderRadius: 12,
        width: '100%',
        height: 85,
        backgroundColor: '#D1F8AF',
        justifyContent: 'center',
        alignItems: 'center',
        ...shadow
    },
});

export default Market;
