import { StyleSheet,Button} from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
  return (
    <Button
      title="Open Popup"
      onPress={() => navigation.navigate('Details')}
    />
  );
}


const styles = StyleSheet.create({})