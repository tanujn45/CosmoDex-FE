import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { colors, fonts, fontSizes, sizes } from "../styles";
import { LinearGradient } from "expo-linear-gradient";

const Header = ({
  title,
  style,
}: {
  title: string;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <LinearGradient
      colors={[
        "rgba(0, 0, 0, 1)",
        "rgba(0, 0, 0, 1)",
        "rgba(0, 0, 0, 1)",
        "rgba(0, 0, 0, 0.4)",
        "rgba(0, 0, 0, 0.4)",
        "transparent",
      ]}
      style={[styles.headerContainer, style]}
    >
      <Text style={styles.headTitle}>{title}</Text>
      <Text style={styles.address}>0x8fA...748</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingTop: sizes.marginTop,
    paddingBottom: sizes.padding,
  },
  headTitle: {
    fontSize: fontSizes.heading,
    fontFamily: fonts.medium,
    color: colors.fontActive,
    // textDecorationLine: "underline",
  },
  address: {
    fontSize: fontSizes.subHeading,
    fontFamily: fonts.bodyFont,
    color: colors.fontPassive,
  },
});

export default Header;
