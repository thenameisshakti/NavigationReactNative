import {View,Text, TouchableOpacity} from "react-native"
export default function PopupScreen({ navigation }) {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <Text style={{ fontSize: 18 }}>Welcome Popup</Text>
    </View>
  );
}
