import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import TopBar from './TopBar'

class Second extends React.Component {
    render() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
        <TopBar/>
        </View>
      </ScrollView>
  </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});



export default Second;