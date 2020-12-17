import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

class Topbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          text: ''
        };
      }

    render() {
        var data = [["C", "Java", "JavaScript", "PHP"]];
  return (
    <View style={styles.container}>
    <Text style={styles.topbar_title}>SmartChecking</Text>
    <DropdownMenu
          style={{flex: 1}}
          bgColor={'red'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          // arrowImg={}      
          // checkImage={}   
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}} 
          // maxHeight={300} 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >
 
          <View style={{flex: 1}}>
            <Text>
              {this.state.text} is the best language in the world
            </Text>
          </View>
 
        </DropdownMenu>
  </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 65,
    flexDirection: 'row', // row
    backgroundColor: '#0CC17C',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
  topbar_title:{
    marginTop:20,
    fontSize:20,
    color:'white',

  },
});



export default Topbar;