import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, View, Text, TextInput } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.search_view}>
        <Searchbar
          style={styles.search}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.icon_view}>
        <Icon style={styles.icon} name="filter" size={30} color={'black'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  search_view: {
    backgroundColor: 'transparent',
    width: '80%'
  },
  search: {
    borderRadius: 30,
    height: 37,
    width: '100%',
    margin: 10,
    backgroundColor: 'white'
  },
  icon_view: {
    width: '18%'
  },
  icon: {
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
  },
});

export default SearchBar;
