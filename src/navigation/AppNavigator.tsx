import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyTabs } from './DynamicBottomtabs';
import { SafeAreaView } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();


export function AppNavigator() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <Stack.Navigator>
      {/* Tabs screen (NO back button here) */}
      <Stack.Screen
        name="MainTabs"
        component={MyTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    </SafeAreaView>
  );
}
