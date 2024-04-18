import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";
import { colors, sizes, fonts, fontSizes } from "../styles";

interface Props {
  onPress: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
}

const AppButton = ({ onPress, title, style }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[style, styles.btnContainer]}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.theme,
    borderRadius: sizes.radiusSmall,
    flexDirection: "row",
    height: sizes.inputHeight,
  },
  btnText: {
    color: colors.fontActive,
    fontSize: fontSizes.buttonFont,
    fontFamily: fonts.medium,
    fontWeight: "600",
  },
});

export default AppButton;
