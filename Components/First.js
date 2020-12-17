import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import FilmItem from './FilmItem'

class First extends React.Component {
    render() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source = {require('../assets/img/neg-logo-smart-cheking.png')} style= {{ width: 200, height: 200 }} />
      <Text style={styles.text}>SmartChecking</Text>
      <Text style={{ color:'white', fontSize:20 }}>Snap-Clic-Enregistre</Text>
      <FilmItem/>
      <Text style={{ color:'white', marginTop:10 }}>En vous connectant vous acceptez</Text>
      <Text style={{ color:'white', marginTop:10 }}>les termes et politiques de vie privée</Text>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0CC17C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 45,
  },
});



export default First;