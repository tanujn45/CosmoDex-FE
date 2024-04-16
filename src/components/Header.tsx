import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fonts, fontSizes, sizes } from "../styles";

const Header = ({ title }: { title: string }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.addressContainer}>
        <Text style={styles.address}>0x8fA...748</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: sizes.marginTop,
    marginBottom: sizes.padding,
  },
  title: {
    fontSize: fontSizes.heading,
    fontFamily: fonts.headingFont,
    color: colors.fontActive,
  },
  addressContainer: {
    backgroundColor: colors.fontPassive,
    borderRadius: sizes.radius,
    padding: 10,
  },
  address: {
    fontSize: fontSizes.subHeading,
    fontFamily: fonts.bodyFont,
    color: colors.background,
  },
});

export default Header;
