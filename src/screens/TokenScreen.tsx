import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import Token from "../components/Token";
import axios, { AxiosResponse } from "axios";

interface TokenData {
  symbol: string;
  name: string;
  logo: string;
  circulating_supply: string;
  total_supply: string;
  max_supply: string;
  market_cap_usd: string;
  market_cap_rank: string;
  market_cap_24hr_change: string;
  market_cap_24hr_percent_change: string;
  total_volume: string;
  usd_price: string;
  usd_price_24hr_high: string;
  usd_price_24hr_low: string;
  usd_price_24hr_change: string;
  usd_price_24hr_percent_change: string;
  usd_price_ath: string;
  ath_percent_change: string;
  ath_date: string;
  usd_price_1hr_percent_change: string;
  usd_price_7d_percent_change: string;
  usd_price_30d_percent_change: string;
}

const TokenScreen = () => {
  const [tokens, setTokens] = useState<TokenData[]>([]);

  useEffect(() => {
    axios
      .get<TokenData[]>("http://10.0.0.151:3001/tokens")
      .then((response: AxiosResponse) => {
        setTokens(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={tokens}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Token
              tokenName={item.name}
              tokenSymbol={item.symbol}
              tokenPrice={item.usd_price}
              tokenImage={item.logo}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default TokenScreen;
