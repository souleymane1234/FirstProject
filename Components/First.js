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
      <Text style={{ color:'white', fontSize:20, top: -20 }}>Snap-Clic-Enregistre</Text>
      {/* <View style={styles.container_item}> */}
      <View style={styles.content_container}>
      <View style={styles.header_container}>
        <Text style={styles.title_text}>Je me connecte</Text>
      </View>
      <View style={styles.desciption_container}>
      <TextInput
      style={styles.textInput_form1}
      placeholder="Nom d'Utilisateur, Email ou Téléphone" />
        <TextInput
      style={styles.textInput_form2}
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
    <View style={{ top: 20 }}>
    <Text style={{ color:'white', fontSize: 12 }}>En vous connectant vous acceptez</Text>
    <Text style={{ color:'white', fontSize: 12 }}>les termes et politiques de vie privée</Text>
    </View>
    
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0CC17C',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100%'
  },
  text: {
    color: 'white',
    fontSize: 45,
    top: -20
  },
  container_item: {
    height: '33%' ,
    flexDirection: 'row',
    top: 10,
    backgroundColor: 'red'
  },
  content_container: {
    margin:5,
    backgroundColor:'#fff',
    borderRadius: 10,
    height: '33%',
    width: '90%'
  },
  header_container: {
   flex:3,
   flexDirection:'row'
  },
  title_text: {
   fontWeight: 'bold',
   fontSize: 25,
   flex: 1,
   textAlign:'center',
   color:'#0CC17C',
   alignSelf: 'center'
  },
  // vote_text: {
  //   fontWeight: 'bold',
  //   fontSize: 26,
  //   color: '#666666'
  // },
  // description_container: {
  //  flex: 7
  // },
  // description_text: {
  //   fontStyle: 'italic',
  //   color: '#666666'
  // },
  // date_container: {
  //  flex: 1
  // },
  // date_text: {
  //   textAlign: 'right',
  //   fontSize: 14
  // },
  // button_form: {
  //   width: 80,
  //   margin:5,
  //   backgroundColor:'yellow'
  // },

  customBtnText: {
    fontSize: 18,
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
    borderRadius: 10,
    margin:10,
    height:48,
    top: -3,
    width: '90%',
    alignSelf: 'center'
    },    
    textInput_form1: {
      paddingHorizontal: 30,
      paddingVertical: 5,
      borderRadius: 10,
      margin:10,
      height: 40,
      borderColor: '#0CC17C',
      borderWidth: 1,
      marginBottom:1,
      top: -10,
      width: '90%',
      alignSelf: 'center'
      },
      textInput_form2: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 10,
        margin:10,
        height: 40,
        borderColor: '#0CC17C',
        borderWidth: 1,
        marginBottom:1,
        top: -4,
        width: '90%',
        alignSelf: 'center'
        }
});


