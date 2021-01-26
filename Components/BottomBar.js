import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity, 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'

const BottomBar = () => {
  const navigation = useNavigation();

  return (
  //   <View style={styles.footerContainer}>
  //   <View style={styles.footerContentCentered}>
  //     <TouchableOpacity style={styles.footerHomeContainer}>
  //         <Icon size={25} color="#fff" name="home" style={styles.homeIcon}  />
  //     </TouchableOpacity>
  //   </View>

  //   <View style={styles.footerContentCentered}>
  //     <TouchableOpacity 
  //     onPress= {() => navigation.navigate('ManualRegister')}
  //     style={styles.footerNotifContainer}>
  //         <Icon size={25} color="#fff" name="id-card" style={styles.homeIcon}  />
  //     </TouchableOpacity>
  //   </View>

  //   <View style={styles.footerContentCentered}>
  //     <TouchableOpacity style={styles.footerChatContainer}>
  //         <Icon size={25} color="#fff" name="camera" style={styles.homeIcon}   />
  //     </TouchableOpacity>
  //   </View>

  //   <View style={styles.footerContentCentered}>
  //     <TouchableOpacity style={styles.footerProfilContainer}>
  //         <Icon size={25} color="#fff" name="user-circle" style={styles.homeIcon}   />
  //     </TouchableOpacity>
  //   </View>

  // </View>

  <View style={styles.footerContainer}>
  <View style={styles.footerContentCentered}>
    <TouchableOpacity style={styles.footerHomeContainer}>
      <View style={styles.homeContainer}>
        <Icon size={25} color="#fff" name="home" style={styles.homeIcon}  />
    </View>
    </TouchableOpacity>
  </View>

  <View style={styles.footerContentCentered}>
    <TouchableOpacity 
     onPress= {() => navigation.navigate('ManualRegister')}
    style={styles.footerNotifContainer}>
    <View style={styles.homeContainer}>
        <Icon size={25} color="#fff" name="id-card" style={styles.homeIcon}  />
    </View>
    </TouchableOpacity>
  </View>

  <View style={styles.footerContentCentered}>
    <TouchableOpacity style={styles.footerChatContainer}>
    <View style={styles.homeContainer}>
        <Icon size={25} color="#fff" name="camera" style={styles.homeIcon}   />
    </View>
    </TouchableOpacity>
  </View>

  <View style={styles.footerContentCentered}>
    <TouchableOpacity style={styles.footerProfilContainer}>
    <View style={styles.homeContainer}>
        <Icon size={25} color="#fff" name="user-circle" style={styles.homeIcon}   />
    </View>
    </TouchableOpacity>
  </View>

</View>

  );
};
export default BottomBar;



const styles = StyleSheet.create({


  //  footerContainer: {
  //     backgroundColor: 'red',
  //     width: 200
  //  },

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
  // footerContainer: {
  //   backgroundColor: '#0CC17C',
  //   borderRadius: 30,
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   paddingVertical: 10,
  //   width: '60%',
  //   alignSelf: 'center',
  // },

  footerText: {color: 'white', fontSize: 11, marginTop: 5, marginBottom:0},
  footerVoiceText: {color: 'white', fontSize: 12, marginTop: 5},
  footerContentCentered: {justifyContent: 'center', alignItems: 'center'},

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
    position: 'absolute',
    bottom: 0,
 
    
    marginVertical: 20,
    // flex: 1,
    // elevation: 3,
    backgroundColor: '#0CC17C',
    borderRadius: 18,
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    width: '60%',
    alignSelf: 'center',
  },
});

