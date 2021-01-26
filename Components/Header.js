import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import {  MenuItem, OverflowMenu, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchBar from './SearchBar';
import { useNavigation } from '@react-navigation/native'


const MenuIcon = (props) => (
  <Icon size={22} color={'white'} {...props} name='ellipsis-v'/>
);

const InfoIcon = (props) => (
  <Icon {...props} name='ellipsis-v'/>
);

const LogoutIcon = (props) => (
  <Icon {...props} name='ellipsis-v'/>
);


export default function Header() {

  const [menuVisible, setMenuVisible] = React.useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu}/>
  );

  const renderOverflowMenuAction = () => (
    <React.Fragment>
      <OverflowMenu
      style={{zIndex: 1000}}
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem onPress= {() => navigation.navigate('Select')} title='Sélectionner'/>
        <MenuItem onPress= {() => navigation.navigate('First')} title='Se déconnecter'/>
      </OverflowMenu>
    </React.Fragment>
  );

  const renderTitle = () => (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>SmartChecking</Text>
    </View> 
  );

  return (
    <View>
    <TopNavigation
    style={styles.container}
      title={renderTitle}
      accessoryRight={renderOverflowMenuAction}
    />
    <View style={styles.search_bar}>
    <SearchBar />
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0CC17C',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  search_bar: {
    top: 3,
    height: 48,
  },
});