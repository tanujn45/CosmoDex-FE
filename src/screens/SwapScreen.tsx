import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import RNPickerSelect, { PickerStyle } from "react-native-picker-select";
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from "../components/Header";
import { colors, sizes, fonts, fontSizes } from "../styles";
import AppButton from "../components/AppButton";
import App from "../../App";

const SwapScreen = () => {
  const [selected, setSelected] = useState(0);
  const [currencyTo, setCurrencyTo] = useState("");
  const [text, onChangeText] = React.useState("0");

  const currencies = [
    { label: "USD", value: "USD" },
    { label: "EUR", value: "EUR" },
    { label: "GBP", value: "GBP" },
    { label: "JPY", value: "JPY" },
    // Add more currencies as needed
  ];

  const inputStyle: PickerStyle = {
    inputAndroid: {
      color: colors.fontActive,
      backgroundColor: colors.background,
      width: 80,
      height: sizes.inputHeight,
      paddingHorizontal: 10,
      borderRadius: sizes.radiusSmall,
    },
    inputIOS: {
      color: colors.fontActive,
      backgroundColor: colors.background,
      width: 80,
      height: sizes.inputHeight,
      paddingHorizontal: 10,
      borderRadius: sizes.radiusSmall,
    },
    placeholder: { color: colors.fontActive },
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <Header title="Swap tokens" />
        <View style={styles.parentInputContainer}>
          <View style={styles.headingTextContainer}>
            <Text style={styles.headingText}>You send</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              returnKeyType="done"
              keyboardType="numeric"
              keyboardAppearance="dark"
              onChangeText={onChangeText}
              value={text}
            />
            <RNPickerSelect
              onValueChange={(value) => setCurrencyTo(value)}
              placeholder={{
                label: "USDT",
                value: null,
              }}
              style={inputStyle}
              items={currencies}
            />
          </View>
          <View style={styles.headingTextContainer}>
            <Text style={styles.headingText}>You get</Text>
            <View style={styles.iconContainer}>
              <AntDesign
                name="retweet"
                size={20}
                color={colors.fontPassive}
                style={styles.icon}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              returnKeyType="done"
              keyboardType="numeric"
              keyboardAppearance="dark"
              onChangeText={onChangeText}
              value={text}
            />
            <RNPickerSelect
              onValueChange={(value) => setCurrencyTo(value)}
              items={currencies}
              style={inputStyle}
            />
          </View>
          <View style={styles.headingTextContainer}>
            <Text style={styles.headingText}>Slippage</Text>
            <View style={styles.buttonGroup}>
              {["0.5%", "1%", "2.5%"].map((button, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button}
                  onPress={() => setSelected(index)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      selected === index && styles.selectedButtonText,
                    ]}
                  >
                    {button}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <AppButton
            title="Swap tokens"
            onPress={() => {}}
            style={{ marginTop: 5 }}
          />
        </View>
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
  parentInputContainer: {
    backgroundColor: colors.backgroundPassive,
    padding: sizes.paddingSmall,
    borderRadius: sizes.radiusSmall,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizes.radiusSmall,
    overflow: "hidden",
    marginBottom: 15,
  },
  headingTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headingText: {
    color: colors.fontActive,
    fontSize: fontSizes.subSubHeading,
    fontFamily: fonts.regular,
  },
  iconContainer: {
    backgroundColor: colors.background,
    borderRadius: sizes.radiusSmall,
    marginRight: 25,
    padding: 5,
  },
  icon: {
    transform: [{ rotate: "90deg" }],
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 0,
    borderColor: colors.theme,
    borderTopRightRadius: sizes.radiusSmall,
    borderBottomRightRadius: sizes.radiusSmall,
    backgroundColor: colors.background,
    marginRight: 10,
    fontSize: 50,
    color: colors.fontActive,
    height: sizes.inputHeight,
  },
  buttonGroup: {
    flexDirection: "row",
    borderRadius: sizes.radiusSmall,
    overflow: "hidden",
  },
  button: {
    backgroundColor: colors.background,
  },
  buttonText: {
    padding: 10,
    paddingHorizontal: 15,
    color: colors.fontActive,
  },
  selectedButtonText: {
    backgroundColor: colors.theme,
  },
});

export default SwapScreen;
