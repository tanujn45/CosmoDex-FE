import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const SwapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swap Screen</Text>
      {/* Add your profile content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default SwapScreen;
