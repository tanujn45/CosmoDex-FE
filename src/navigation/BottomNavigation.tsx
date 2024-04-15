import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TokenScreen from '../screens/TokenScreen';
import SwapScreen from '../screens/SwapScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tokens" component={TokenScreen} />
            <Tab.Screen name="Swap" component={SwapScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default BottomNavigation;