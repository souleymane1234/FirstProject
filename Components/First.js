import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, FlatList, TextInput, TouchableOpacity  } from 'react-native';
import films from '../donnee/users'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// class First extends React.Component {
//     render() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Image source = {require('../assets/img/neg-logo-smart-cheking.png')} style= {{ width: 200, height: 200 }} />
//       <Text style={styles.text}>SmartChecking</Text>
//       <Text style={{ color:'white', fontSize:20 }}>Snap-Clic-Enregistre</Text>
//       <FilmItem/>
//       <Text style={{ color:'white', marginTop:10 }}>En vous connectant vous acceptez</Text>
//       <Text style={{ color:'white', marginTop:10 }}>les termes et politiques de vie privée</Text>
//     </SafeAreaView>
//   );
// }
// }

export default function First({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source = {require('../assets/img/neg-logo-smart-cheking.png')} style= {{ width: 200, height: 200 }} />
      <Text style={styles.text}>SmartChecking</Text>
      <Text style={{ color:'white', fontSize:20 }}>Snap-Clic-Enregistre</Text>
      <View style={styles.container_item}>
      <View style={styles.content_container}>
      <View style={styles.header_container}>
        <Text style={styles.title_text}>Je me connecte</Text>
      </View>
      <View style={styles.desciption_container}>
      <TextInput
      style={styles.textInput_form}
      placeholder="Nom d'Utilisateur, Email ou Téléphone" />
        <TextInput
      style={styles.textInput_form}
      placeholder='Mot de Passe' secureTextEntry />
      <View>
      <TouchableOpacity
        style={styles.customBtnBG}
        onPress={() => navigation.navigate('Second')}
      >
    <Text style={styles.customBtnText}>Se Connecter</Text>
</TouchableOpacity>
      </View>
      </View>

    </View>
    </View>
    <Text style={{ color:'white', marginTop:10 }}>En vous connectant vous acceptez</Text>
    <Text style={{ color:'white', marginTop:10 }}>les termes et politiques de vie privée</Text>
  </SafeAreaView>
  );
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
  container_item: {
    height: 235 ,
    flexDirection: 'row',
    marginTop:60
  },
  content_container: {
    flex:1,
    margin:5,
    backgroundColor:'#fff',
    borderRadius: 5
  },
  header_container: {
   flex:3,
   flexDirection:'row'
  },
  title_text: {
   fontWeight: 'bold',
   fontSize: 20,
   flex: 1,
   flexWrap: 'wrap',
   paddingRight: 5,
   textAlign:'center',
   color:'#0CC17C',
   marginTop:15
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
   flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
   flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  },
  // button_form: {
  //   width: 80,
  //   margin:5,
  //   backgroundColor:'yellow'
  // },

  customBtnText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
    textAlign:'center',
    marginTop:5
    },
    
    /* Here style the background of your button */
    customBtnBG: {
    backgroundColor: "#0CC17C",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 5,
    margin:10,
    height:53
    },    
    textInput_form: {
      paddingHorizontal: 30,
      paddingVertical: 5,
      borderRadius: 5,
      margin:10,
      height: 45,
      borderColor: '#0CC17C',
      borderWidth: 1,
      marginBottom:1,
      }
});


