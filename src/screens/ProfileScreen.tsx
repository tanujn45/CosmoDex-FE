import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { colors, sizes } from "../styles";
import Header from "../components/Header";

const NotConnectedScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <Header title="Not connected" />
      </SafeAreaView>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <Header title="Wallet" />
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
  subContainer: {
    backgroundColor: colors.background,
    marginBottom: sizes.marginTop,
  },
});

export default ProfileScreen;
