import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import films from '../donnee/users'
import FilmItem from './FilmItem'

class Essai extends React.Component {
    render() {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>SmartChecking</Text>
      <FlatList
      data={films}
      keyExtractor= {(item) => item.id.toString()}
      renderItem={({item}) => <FilmItem/>}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
});



export default Essai;