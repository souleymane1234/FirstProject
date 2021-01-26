import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {  MenuItem, OverflowMenu, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchBar from './SearchBar';
import { useNavigation } from '@react-navigation/native'


const MenuIcon = (props) => (
  <Icon size={22} color={'white'} {...props} name='ellipsis-v'/>
);
const DeleteIcon = (props) => (
  <Icon size={22} color={'white'} {...props} name='trash'/>
);


export default function TopBarSelect() {
  const navigation = useNavigation();

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }; 

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu}/>
  );

  const renderOverflowMenuAction = () => (
    <React.Fragment>
      <TopNavigationAction icon={DeleteIcon}/>
      <OverflowMenu
      style={{zIndex: 1000}}
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem title='Tout sélectionner'/>
        <MenuItem title='Exporter en .csv'/>
        <MenuItem title='Exporter en .pdf'/>
      </OverflowMenu>
    </React.Fragment>
  );

  const renderTitle = () => (
    <View style={styles.titleContainer}>
      <TouchableOpacity
        onPress= {() => navigation.navigate('Second')}
      >
          <Icon size={22} color={'white'} name='arrow-left'/>
      </TouchableOpacity>
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
    
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  search_bar: {
    height: 45,
  },
});