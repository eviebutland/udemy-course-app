import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Which is in a view, like a div!</Text>
      <View style={{padding: 40, flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput style={{borderBottomColor: 'black', borderWidth: 1, padding: 10, width: '100%'}} placeholder="Course Goal"></TextInput>
        <Button title="Add"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40
  },
});
