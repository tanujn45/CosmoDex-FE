import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fonts, fontSizes, sizes } from "../styles";

type TokenProps = {
  tokenName: string;
  tokenSymbol: string;
  tokenPrice: string;
  tokenImage: string;
};

const generateEllipsis = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
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
          <Text style={styles.name}>{generateEllipsis(tokenName, 20)}</Text>
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
    marginBottom: 30,
  },
  containerImg: {
    flexDirection: "row",
    alignItems: "center",
  },
  symbol: {
    fontSize: fontSizes.tokenHeading,
    fontFamily: fonts.tokenHeadingFont,
    color: colors.fontActive,
    textTransform: "uppercase",
  },
  name: {
    fontSize: fontSizes.tokenSubHeading,
    fontFamily: fonts.tokenSubHeadingFont,
    color: colors.fontPassive,
  },
  price: {
    fontSize: fontSizes.tokenPrice,
    fontFamily: fonts.tokenPriceFont,
    color: colors.fontActive,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: sizes.radius,
    marginRight: 20,
  },
});

export default Token;
