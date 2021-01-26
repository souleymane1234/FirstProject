import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Picker,
  Platform,
  ScrollView
} from 'react-native'
// import { Formik, Field } from 'formik'
// import * as yup from 'yup'
import DatePickers from './DatePickers'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Avatar } from '@ui-kitten/components';
import { IconButton, Colors } from 'react-native-paper';

const AutoRegister = () => {
  const [selectedValue, setSelectedValue] = useState("java");
                                                                                                                                                                                                                                                                   
  // fin de la nouvelle prise

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={{}}>
      <Icon style={styles.icon} name="arrow-left"   />

      </View>
        
      <Avatar style={{width: 110, height: 110, alignSelf: 'center'}} source={require('../assets/img2.jpg')}/>
      <Text style={{color: '#0CC17C', fontSize: 20, fontWeight: 'bold', marginHorizontal: 15, margin: 10}}>Scan du visiteur</Text>
      <View style={{width: '100%', alignItems: 'center'}}>
        <TextInput
        style={styles.textInput_form}
        placeholder="Nom" />
          <TextInput
        style={styles.textInput_form}
        placeholder='Prénoms' secureTextEntry />
                <View style={styles.textInput_form}>
        <Picker
        selectedValue={selectedValue}
        style= {{ top: -14, marginHorizontal: -7 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Homme" value="Homme" />
        <Picker.Item label="Femme" value="Femme" />
      </Picker>
      </View>
        <TextInput
        style={styles.textInput_form}
        placeholder="Email" />
        <TextInput
        style={styles.textInput_form}
        placeholder="Numéro" />

      <View style={styles.textInput_form}>
        <Picker
        selectedValue={selectedValue}
        style= {{ top: -14, marginHorizontal: -7 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Visiteur" value="Visiteur" />
        <Picker.Item label="Employer" value="Employer" />
      </Picker>
      </View>
      <View style={styles.textInput_form}>

        <Picker
        selectedValue={selectedValue}
        style= {{ top: -14,marginHorizontal: -7 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Card_id" value="Card_id" />
        <Picker.Item label="Passeport" value="Passeport" />
        <Picker.Item label="CNI" value="CNI" />
      </Picker>
      </View>
      <View style={styles.textInput_form}>
        <DatePickers />
      </View>
      <View style={styles.textInput_form}>
        <DatePickers />
      </View>
      <TextInput
        style={styles.textInput_form}
        placeholder="Nombre de visiteurs" />

      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', top: 20}}>
      <View>
            <IconButton
          icon="crosshairs"
          color={Colors.red500} 
          size={30}
          style={{top: -10, marginHorizontal: 10}}
          onPress={() => console.log('annuler')}
        />
        <Text style={{top: -20, fontSize: 20}}>Annuler</Text>
      </View>
      <View>
            <IconButton
          icon="crosshairs"
          size={30}
          style={{top: -10, color: '#0CC17C', marginHorizontal: 20}}
          onPress={() => console.log('confirmer')} 
        />
        <Text style={{top: -20, fontSize: 20}}>Confirmer</Text>
      </View>
      </View>
      </SafeAreaView>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  icon: {
    margin: 10,
    top: 20,
    marginHorizontal: 15,
    fontSize: 22,
    color:"#0CC17C",
  },
  textInput_form: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 5,
    margin:10,
    height: 35,
    borderColor: '#0CC17C',
    borderWidth: 1,
    marginBottom:1,
    width: '90%'
    } 
})
export default AutoRegister