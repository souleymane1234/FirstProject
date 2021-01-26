import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';
import { data } from '../donnee/detailUser';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Card, Header } from 'react-native-elements';

// const BackIcon = (props) => (
//   <Icon size={22} color={'white'} {...props} name='arrow-left'/>
// );
{/* <i class="fas fa-arrow-left"></i> */}


const Detail = (props) => {
  return (

        <SafeAreaView style={{height: '100%', marginBottom: 200, top: 130}}>
            <View style={{marginHorizontal: 40, top: -15}}>
          <View style={{}}> 
            <Text
              style={{
                fontSize: 18,
                color: '#000',
                fontWeight: 'bold',
                fontFamily: 'Montserrat',
              }}>
              {props.event.nom}
            </Text>
          </View>
          <View>
              <Text
                style={{
                  fontSize: 14,
                  color: '#0CC17C',
                  fontWeight: 'bold',
                  fontFamily: 'Montserrat',
                }}>
                {props.event.status}
              </Text>
            </View>
            </View>
          <View style={{marginBottom: 20}}>

          <View style = {styles.lineStyle} />
            <View style={{flexDirection: 'row', margin: 10, marginHorizontal: 40, marginBottom: 30}}>
            <View>
            <Icon name="sign-in-alt" size={20} color="#0CC17C" />
            </View>
            <View style={styles.motif}>
            <Text style={{ fontSize: 14, fontFamily: 'Gotham' }}>
              {props.event.motif}
            </Text>
            <Text style={{ fontSize: 10, fontFamily: 'Gotham', color: '#E1E1E1' }}>motif de la visite</Text>
            </View>

            
            </View>
            <View style={{flexDirection: 'row', margin: 10, marginHorizontal: 40, marginBottom: 30}}>
            <View>
            <Icon size={20} color={'#0CC17C'} {...props} name="id-card" />
            </View>
            <View style={styles.typeIdentification}>
            <Text style={{ fontSize: 14, fontFamily: 'Gotham' }}>
              {props.event.typeIdentification}
            </Text>
            <Text style={{ fontSize: 10, fontFamily: 'Gotham', color: '#E1E1E1' }}>Pièce d'identité montrée</Text>
            </View>

            
            </View>
            <View style={{flexDirection: 'row', margin: 10, marginHorizontal: 40}}>
            <View>
            <Icon size={20} color={'#0CC17C'} {...props} name="id-card" />
            </View>
            <View style={styles.nombrePersonne}>
            <Text style={{ fontSize: 14, fontFamily: 'Gotham' }}>
              {props.event.nombrePersonne}
            </Text>
            <Text style={{ fontSize: 10, fontFamily: 'Gotham', color: '#E1E1E1' }}>Nombre de personnes entrées</Text>
            </View>

            
            </View>

          </View>
        </SafeAreaView>
  );
};


export default function DetailVisitor() {
  return (
    <SafeAreaView style={styles.container}>
<Icon style={styles.icon} name="arrow-left"   />
     
        <View>

        <Image source = {require('../assets/44.jpg')} 
        style= {{ width: 150, height: 150,  alignSelf: 'center', borderColor: 'white', borderWidth: 3, elevation: 3, zIndex: 1, borderRadius: 80, top: 50 }} />
        </View>
        
        <View style= {styles.content}>
          
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Detail event={item} />}
          />
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
  motif: {
    marginHorizontal: 20
  },
  typeIdentification: {
    marginHorizontal: 20
  },
  nombrePersonne: {
    marginHorizontal: 20,
  },
  icon: {
    margin: 10,
    top: 10,
    marginHorizontal: 15,
    fontSize: 22,
    color:"white",
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'#E1E1E1',
    margin:10,
    marginLeft: 35,
    marginRight: 35
}

});