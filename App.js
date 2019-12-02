import React ,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native';
import Login from './components/Login';
import RestSample from './components/RestSample';


export default function App() {
  return (
    <View style={styles.container}>
      <RestSample/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
