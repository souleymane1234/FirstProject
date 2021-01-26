import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity, 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'

const HomeIcon = (props) => (
  <Icon size={25} color={'white'} {...props} name="home" />
);
const IdIcon = (props) => (
  <Icon size={25} color={'white'} {...props} name="id-card" />
);
const CameraIcon = (props) => (
  <Icon size={25} color={'white'} {...props} name="camera" />
);
const UserIcon = (props) => (
  <Icon size={25} color={'white'} {...props} name="user-circle" />
);

const BottomBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footerContainer}>
    <View style={styles.footerContentCentered}>
      <TouchableOpacity style={styles.footerHomeContainer}>
        <View style={styles.homeContainer}>
          <Icon size={25} color="#fff" name="home" style={styles.homeIcon} pack="material" />
      </View>
      </TouchableOpacity>
    </View>

    <View style={styles.footerContentCentered}>
      <TouchableOpacity 
      onPress= {() => navigation.navigate('ManualRegister')}
      style={styles.footerNotifContainer}>
      <View style={styles.homeContainer}>
          <Icon size={25} color="#fff" name="id-card" style={styles.homeIcon}  pack="material"/>
      </View>
      </TouchableOpacity>
    </View>

    <View style={styles.footerContentCentered}>
      <TouchableOpacity style={styles.footerChatContainer}>
      <View style={styles.homeContainer}>
          <Icon size={25} color="#fff" name="camera" style={styles.homeIcon}  pack="material" />
      </View>
      </TouchableOpacity>
    </View>

    <View style={styles.footerContentCentered}>
      <TouchableOpacity style={styles.footerProfilContainer}>
      <View style={styles.homeContainer}>
          <Icon size={25} color="#fff" name="user-circle" style={styles.homeIcon}  pack="material" />
      </View>
      </TouchableOpacity>
    </View>

  </View>
  );
};
export default BottomBar;



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // footerHomeContainer: {
  //   height: 20,
  //   width: 20,
  //   borderRadius: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // footerNotifContainer: {
  //   height: 20,
  //   width: 20,
  //   borderRadius: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // footerChatContainer: {
  //   height: 20,
  //   width: 20,
  //   borderRadius: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // footerProfilContainer: {
  //   height: 20,
  //   width: 20,
  //   borderRadius: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  footerContainer: {
    // bottom: 0,
    // left: 0,
    // right: 0,
    marginHorizontal: 70,
    marginVertical: 20,
    flex: 1,
    elevation: 3,
    backgroundColor: '#0CC17C',
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10
  },
});

