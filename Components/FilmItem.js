import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import films from '../donnee/users'

class FilmItem extends React.Component {
    render() {
  return (
    <View style={styles.container}>
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
      placeholder='Mot de Passe' />
      <View>
      <TouchableOpacity
style={styles.customBtnBG}
onPress={() => {}}
>
<Text style={styles.customBtnText}>Se Connecter</Text>
</TouchableOpacity>
      </View>
      </View>

    </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
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



export default FilmItem;