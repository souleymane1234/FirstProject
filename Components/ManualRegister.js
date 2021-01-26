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
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Avatar } from '@ui-kitten/components';
import { IconButton, Colors, Provider, Portal, Modal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

const ManualRegister = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("java");
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%', alignSelf: 'center'};
  return (
      <SafeAreaView style={styles.container}>
        <View style={{ height: '12%'}}>
          <TouchableOpacity
          onPress= {() => navigation.navigate('Second')}
          >
            <Icon style={styles.icon} name="arrow-left"   />
          </TouchableOpacity>
     

      </View>
        
      <Avatar style={{width: 110, height: 110, alignSelf: 'center', top: 30}} source={require('../assets/66.jpg')}/>
      <Text style={{color: '#0CC17C', fontSize: 20, fontWeight: 'bold', marginHorizontal: 15, margin: 10, top: 30}}>Enregistrer une visite</Text>
      <View style={{width: '100%', alignItems: 'center', top: 30}}>
        <TextInput
        style={styles.textInput_form}
        placeholder="Nom" />
          <TextInput
        style={styles.textInput_form}
        placeholder='Prénoms' secureTextEntry />
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
        <Picker.Item label="Homme" value="Homme" />
        <Picker.Item label="Femme" value="Femme" />
      </Picker>
      </View>
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
      </Picker>
      </View>

      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', top: 20}}>
      <View>
            <IconButton
          icon="times-circle"
          color={Colors.red500} 
          size={30}
          style={{top: 30, marginHorizontal: 10}}
          onPress= {() => navigation.navigate('Box')} 
        />
        <Text style={{top: 20, fontSize: 20}}>Annuler</Text>
      </View>
      <View>
            <IconButton
          icon="crosshairs"
          size={30}
          style={{top: 30, color: '#0CC17C', marginHorizontal: 20}}
          onPress={showModal} 
        />
        <Text style={{top: 20, fontSize: 20}}>Confirmer</Text>
      </View>
      </View>
      <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Text style={{marginBottom: 10, textAlign: 'center', color: 'red', fontWeight: 'bold', fontSize: 14, textAlign: 'center'}}>Suppression enregistrement </Text>
        <Text>Etes vous sur de vouloir supprimer cet </Text>
          <Text style={{textAlign: 'center'}}>utilisateur ? vous ne pourrez plus </Text>
          <Text style={{textAlign: 'center'}}>revenir en arriere. Etes vous sur? </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', top: 10, borderTopWidth: 0.3, borderTopColor: '#E1E1E1'}}>
          <TouchableOpacity 
          style={{}}
          onPress={() => setVisible(false)}
          >
          <Text style={{color:'red', fontSize: 20}}>Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={{}}
          onPress={() => setVisible(false)}
          >
          <Text style={{color:'#0CC17C', fontSize: 20}}>Confirmer</Text> 
          </TouchableOpacity>

          </View>
        </Modal>
      </Portal>
    </Provider>
      {/* <Modal
        style={{width: '80%', borderRadius: 10}}
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text style={{marginBottom: 10, textAlign: 'center', color: 'red', fontWeight: 'bold', fontSize: 14, textAlign: 'center'}}>Suppression enregistrement </Text>
          <Text>Etes vous sur de vouloir supprimer cet </Text>
          <Text style={{textAlign: 'center'}}>utilisateur ? vous ne pourrez plus </Text>
          <Text style={{textAlign: 'center'}}>revenir en arriere. Etes vous sur? </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', top: 10, borderTopWidth: 0.3, borderTopColor: '#E1E1E1'}}>
          <TouchableOpacity 
          style={{}}
          onPress={() => setVisible(false)}
          >
          <Text style={{color:'red', fontSize: 20}}>Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={{}}
          onPress={() => setVisible(false)}
          >
          <Text style={{color:'#0CC17C', fontSize: 20}}>Confirmer</Text>
          </TouchableOpacity>

          </View>
        </Card>
      </Modal> */}
      </SafeAreaView>
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
    },
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }, 
})
export default ManualRegister