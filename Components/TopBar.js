import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Button,
  IndexPath,
  MenuItem,
  Select,
  SelectItem,
  Layout,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
// import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchBar from './SearchBar';

const MenuIcon = (props) => (
  <Icon size={25} color={'white'} {...props} name="ellipsis-v" />
);
export default function TopBar() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderOverflowMenuAction = () => (
    <React.Fragment>
      <OverflowMenu
        style={styles.menu}
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem title="About" />
        <MenuItem title="Logout" />
      </OverflowMenu>
    </React.Fragment>
  );

  const renderPlacementItem = (title) => <SelectItem title={title} />;

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.header_title}>SmartChecking</Text>
        <Layout>
          <TopNavigation
            style={styles.container}
            accessoryRight={renderOverflowMenuAction}
          />
        </Layout>
      </View>

      <View style={styles.search}>
        <SearchBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0CC17C',
  },
  header: {
    height: 80,
    backgroundColor: '#0CC17C',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  header_title: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  search: {
    height: 45,
  },
});
