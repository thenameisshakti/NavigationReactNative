
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './navigation/DynamicBottomtabs';
import { RootNavigator } from './navigation/RootNavigator';

export default function App() {
  return (
   <SafeAreaProvider>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
   </SafeAreaProvider>
  )
}