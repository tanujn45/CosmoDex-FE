import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import Token from "../components/Token";
import axios, { AxiosResponse } from "axios";
import { colors, fonts, fontSizes, sizes } from "../styles";
import Header from "../components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  const insets = useSafeAreaInsets();
  const [tokens, setTokens] = useState<TokenData[]>([]);

  const ipHome: string = "10.0.0.151";
  const ipWork: string = "104.39.55.229";

  useEffect(() => {
    axios
      .get<TokenData[]>(`http://${ipHome}:3001/tokens`)
      .then((response: AxiosResponse) => {
        setTokens(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <Header
          style={{
            position: "absolute",
            paddingBottom: sizes.paddingHeader,
            zIndex: 1,
            top: insets.top,
            width: "100%",
          }}
          title="Tokens"
        />
        {tokens.length === 0 ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : (
          <FlatList
            data={tokens}
            style={styles.subContainer}
            ListHeaderComponent={<View style={{ height: 100 }} />}
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
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizes.padding,
    backgroundColor: colors.background,
    minHeight: "100%",
  },
  header: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: 0,
  },
  subContainer: {
    flex: 1,
    backgroundColor: colors.background,
    marginBottom: sizes.marginTop,
  },
  loading: {
    color: colors.fontActive,
    fontSize: fontSizes.heading,
    fontFamily: fonts.headingFont,
    marginTop: sizes.marginTop,
  },
});

export default TokenScreen;
