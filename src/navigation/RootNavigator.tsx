import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './DynamicBottomtabs';
import PopupScreen from "../step/PopupScreen"
const Stack = createNativeStackNavigator();
import { TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"

export function RootNavigator() {
  return (
    <Stack.Navigator>
      {/* Tabs screen (NO back button here) */}
      <Stack.Screen
        name="MainTabs"
        component={MyTabs}
        options={{ headerShown: false }}
      />

      {/* Example detail screen */}
      <Stack.Screen
        name="Details"
        component={PopupScreen}
        options={({ navigation }) => ({
    title: 'Details',
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingHorizontal: 1}}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
    ),
  })}
      />
    </Stack.Navigator>
  );
}





