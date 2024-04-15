import React from "react";
import { View, Text, StyleSheet } from "react-native";

type TokenProps = {
  tokenName: string;
  tokenSymbol: string;
  tokenPrice: string;
  tokenImage: string;
};

import { Image } from "react-native";

const Token = ({
  tokenName,
  tokenSymbol,
  tokenPrice,
  tokenImage,
}: TokenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={{ uri: tokenImage }} style={styles.image} />
        <View>
          <Text style={styles.symbol}>{tokenSymbol}</Text>
          <Text style={styles.name}>{tokenName}</Text>
        </View>
      </View>
      <Text style={styles.price}>${tokenPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  containerImg: {
    flexDirection: "row",
    alignItems: "center",
  },
  symbol: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  name: {
    fontSize: 14,
  },
  price: {
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default Token;
