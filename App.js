import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Washer_Nav } from './nav';
//import Halls from './places';




export default function App() {
  return (
    <View>
      <Washer_Nav/>
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


//database when the landury machine is avaliable 
//three states: not working at all, full/working, not running but working 
//avaliable, busy, broken

//drop down 

