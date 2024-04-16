import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TokenScreen from "../screens/TokenScreen";
import SwapScreen from "../screens/SwapScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { colors, fonts, fontSizes, sizes } from "../styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.fontActive,
        tabBarInactiveTintColor: colors.fontPassive,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: colors.theme,
          borderTopWidth: 0,
          height: sizes.bottomTabHeight,
          borderRadius: sizes.radius,
          paddingHorizontal: sizes.padding,
          paddingBottom: sizes.padding,
          margin: sizes.padding,
        },
      }}
    >
      <Tab.Screen
        name="Tokens"
        component={TokenScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.iconStyle}>
              <Feather
                color={color}
                size={sizes.iconSize}
                name="home"
                style={{ textAlignVertical: "center" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Swap"
        component={SwapScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.iconStyle}>
              <AntDesign
                color={color}
                size={sizes.iconSize}
                name="swap"
                style={{ textAlignVertical: "center" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.iconStyle}>
              <Ionicons
                color={color}
                size={sizes.iconSize}
                name="person-outline"
                style={{ textAlignVertical: "center" }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    position: "absolute",
    top: "50%",
  },
});

export default BottomNavigation;
