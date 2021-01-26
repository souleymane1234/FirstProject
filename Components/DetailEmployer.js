import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Avatar } from '@ui-kitten/components';


export default function DetailEemployer({ route, navigation }) {
  const { image, nom, status, motif, typeIdentification, nombresEntree } = route.params;
  return (
    <SafeAreaView style={styles.container}>
           <TouchableOpacity
          onPress= {() => navigation.navigate('Second')}
          > 
            <Icon style={styles.icon} name="arrow-left"   />
           </TouchableOpacity> 

     
        <View style= {{   }}>
        <Avatar style={{width: 150, height: 150, alignSelf: 'center', borderColor: 'white', borderWidth: 3, zIndex: 1,  top: 30}} source={image}/>
        {/* <Image source = {image} 
        
        style= {{ width: 150, height: 150,  alignSelf: 'center', borderColor: 'white', borderWidth: 3,  zIndex: 1, borderRadius: 80}} /> */}
        </View>
        
        <View style= {styles.content}>
          <View style={{ height: 100}}></View>

        <View style={{marginHorizontal: 40, marginBottom: 10}}>
          <View style={{marginBottom: 5}}> 
            <Text
              style={{
                fontSize: 18,
                color: '#000',
                fontWeight: 'bold',
                fontFamily: 'Montserrat',
              }}>
              {nom}
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
                {status}
              </Text>
            </View>
            </View>

            <View style={{}}>

<View style = {styles.lineStyle} />
  <View style={{flexDirection: 'row', margin: 10, marginHorizontal: 40, marginBottom: 30}}>
  <View>
  <Icon name="sign-in-alt" size={20} color="#0CC17C" />
  </View>
  <View style={styles.motif}>
  <Text style={{ fontSize: 16, fontFamily: 'Gotham' }}>
    {motif}
  </Text>
  <Text style={{ fontSize: 12, fontFamily: 'Gotham', color: '#E1E1E1' }}>motif de la visite</Text>
  </View>

  
  </View>
  <View style={{flexDirection: 'row', margin: 10, marginHorizontal: 40, marginBottom: 30}}>
  <View>
  <Icon size={20} color={'#0CC17C'} name="id-card" />
  </View>
  <View style={styles.typeIdentification}>
  <Text style={{ fontSize: 16, fontFamily: 'Gotham' }}>
  {typeIdentification}
  </Text>
  <Text style={{ fontSize: 12, fontFamily: 'Gotham', color: '#E1E1E1' }}>Pièce d'identité montrée</Text>
  </View>

  
  </View>
  <View style={{flexDirection: 'row', margin: 10, marginHorizontal: 40}}>
  <View>
  <Icon size={20} color={'#0CC17C'} name="id-card" />
  </View>
  <View style={styles.nombrePersonne}>
  <Text style={{ fontSize: 16, fontFamily: 'Gotham' }}>
    {nombresEntree} 
  </Text>
  <Text style={{ fontSize: 12, fontFamily: 'Gotham', color: '#E1E1E1' }}>Nombre de personnes entrées</Text>
  </View>

  
  </View>

</View>
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
    elevation: -3,
    zIndex: 0,
    // marginHorizontal: 40
    alignContent: 'center',
    alignSelf: 'center',
    top: -50
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
    marginRight: 35,
    top: -5
}

});