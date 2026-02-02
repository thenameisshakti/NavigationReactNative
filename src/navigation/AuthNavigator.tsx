import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtpVerification from '../authStep/OtpVerification';
import Login from '../authStep/Login';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login">
        {(props) => <Login {...props} />}
      </Stack.Screen>

      <Stack.Screen name="OtpVerification">
        {(props) => (
          <OtpVerification />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}