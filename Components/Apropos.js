import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Card, Header } from 'react-native-elements';


export default function Apropos() {
  return (
    <SafeAreaView style={styles.container}>
<Icon style={styles.icon} name="arrow-left"   />
<View style={{with: '100%', height: '25%'}}>

</View>
<View style={{ margin: 10, marginHorizontal: 10}}>
     
        <View>

        <Image source = {require('../assets/img/neg-logo-smart-cheking.png')} 
        style= {{ width: 150, height: 150}} />
        </View>
        
        <View>
            <Text style={{color: 'white', fontSize: 40, marginHorizontal: 5}}>SmartChecking</Text>
        </View>
        <View>
            <Text style={{color: 'white', fontSize: 14, padding: 10}}>
                C'est une application éditée par le Groupe CERCO
                Côte d'Ivoire, permettant de scanner les pièces
                d'identité (CNI, Passeport, Permis de conduire et
                Cartes d'étudiants) afin de mieux enregistrer les
                visiteurs et membres d'une organisation, mettant
                ainsi fin aux registres papiers et la charge pénible
                qui l'accompagne
            </Text>
        </View>
        </View>
        <View style={{top: 50, alignItems: 'center'}}>
            <Text style={{ color:'white' }}>Copyright,Groupe CERCO CI</Text>
            <Text style={{ color:'white' }}>Propriété Privée, Tous Droits Réservés</Text>
        </View>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:'#0CC17C'
  },
  content: {
    backgroundColor: 'white',
    width: '80%',
    height: '70%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    zIndex: 0,
    marginHorizontal: 40,
    top: -20
  },
  icon: {
    margin: 10,
    top: 10,
    marginHorizontal: 15,
    fontSize: 22,
    color:"white",
  },

});