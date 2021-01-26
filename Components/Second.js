import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ListFooterComponent,
  LisHeaderComponent 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchBar from './SearchBar';
import Header from './Header';
import BottomBar from './BottomBar';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import { data } from '../donnee/users';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'

const ListDonne = (props) => {
  return (
    <View style={{margin: -4}}>
      <View style={styles.eventCard}>
        <View style={styles.eventPic}>
          <Image source={props.event.image} style={styles.image} />
        </View>

        <View style={styles.eventInfo}>
          <View style={styles.eventTitle}> 
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                fontWeight: 'bold',
                fontFamily: 'Montserrat',
              }}>
              {props.event.nom}
            </Text>
            <Icon
              style={{ paddingHorizontal: 10 }}
              name="ellipsis-v"
              size={15}
              color={'black'}
            />
          </View>
          <View style={styles.eventSubtitle}>
            <View>
              <Text
                style={{
                  fontSize: 11,
                  color: '#0CC17C',
                  fontWeight: 'bold',
                  fontFamily: 'Montserrat',
                }}>
                {props.event.status}
              </Text>
            </View>
            <Text style={{ fontSize: 10, fontFamily: 'Gotham' }}>
              {props.event.modeEntre}
            </Text>
            <View></View>

            <View>
              <Text style={{ fontSize: 10, fontFamily: 'Gotham' }}>
                Motif:{props.event.motif}
              </Text>
            </View>
          </View>
        </View>
        <View></View>
      </View>
      <View style={styles.eventCardSecond}>
        <View>
          
          <Text
            style={{
              fontSize: 11,
              fontFamily: 'montserrat',
              top: 10,
            }}>
            {props.event.typeIdentification}
          </Text>
        </View>
        <View style={{}}>
          <Text>
            <Icon name="sign-in-alt" size={16} color="#0CC17C" />{' '}
            {props.event.heureEntree}
          </Text>
          <Text>Entrée</Text>
        </View>
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Text>
            <Icon name="sign-out-alt" size={16} color="red" />{' '}
            {props.event.heureSortie}
          </Text>
          <Text>Sortie</Text>
        </View>
        <View style={{ backgroundColor: 'red' }}></View>
        <View style={{ backgroundColor: 'yellow' }}></View>
      </View>
    </View>
  );
};

function Second() {
  const navigation = useNavigation();
  return (
    // <SafeAreaView style={styles.container}>
    //   <View>
    //     <Header />
    //   </View>

    //   <ScrollView>
    //     <View>
    //       <FlatList
    //         data={data}
    //         keyExtractor={(item) => item.id.toString()}
    //         renderItem={({ item }) => (
    //           <TouchableHighlight
    //           underlayColor= 'transparent'
    //           onPress= {() => navigation.navigate('DetailEmployer', item)}>
    //             <ListDonne event={item}/>
    //           </TouchableHighlight>
    //         ) }
            
    //       />
    //     </View>
    //     <BottomBar />
    //   </ScrollView>
    // </SafeAreaView>

    <SafeAreaView style={styles.container}>
      <Header />
     <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
               renderItem={({ item }) => (
            <TouchableHighlight
               underlayColor= 'transparent'
               onPress= {() => navigation.navigate('DetailEmployer', item)}>
                 <ListDonne event={item}/>
               </TouchableHighlight>
             ) }
     ListFooterComponent={
      <BottomBar />
     }/>
     </SafeAreaView>
  );
}

export default Second;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eventCard: {
    marginHorizontal: 10,
    height: 102,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '94%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
    zIndex: 1,
  },
  eventCardSecond: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'white',
    elevation: 1,
    marginHorizontal: 20,
    padding: 20,
    top: -20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    zIndex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 61,
  },

  //   eventCardSecond: {
  //   margin: 10,
  //   height: 150,
  //   borderRadius: 20,
  //   backgroundColor: 'white',
  //   flexDirection: 'row',
  //   width: '95%',
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.5,
  //   shadowRadius: 2,
  //   elevation: 5,
  //   zIndex: 1000,
  // },

  // main_container: {
  //   height: 150,
  //   borderRadius: 20,
  //   backgroundColor: 'red',
  //   flexDirection: 'row',
  //   width: '100%',
  //   elevation: 1,
  // },
  eventInfo: {
    margin: 10,
    height: '50%',
    width: '65%', 
  },
  eventTitle: {
    paddingBottom: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 70, 
    height: 70,
    borderRadius: 40,
    margin: 10,
    alignContent: 'center',
    top: 5,
  },
});

// const LandingScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text>Public Landing Screen</Text>
//       <Button
//         title="Go to Home"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// };

// export default LandingScreen;

// import React from 'react';
// import { View, Text, StyleSheet, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
// import films from '../donnee/users'

// export default function Second() {
//   return (
//     <View style={styles.container}>
//     <Image
//     style={styles.image}
//     source={{uri: 'image'}}
//     />
//     <View style={styles.content_container}>
//       <View style={styles.header_container}>
//         <Text style={styles.title_text}>titre du film</Text>
//         <Text style={styles.vote_text}>Vote</Text>
//       </View>
//       <View style={styles.description_container}>
//         <Text style={styles.descripton_text}>Description</Text>
//         </View>
//       <View style={styles.date_container}>
//         <Text style={styles.date_text}>sorti le 00/00/0000</Text>

//       </View>

//     </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 190 ,
//     flexDirection: 'row',
//     backgroundColor:'red',
//   },
//   image: {
//     width: 120,
//     height: 180 ,
//     matgin: 5,
//     backgroundColor: 'gray',
//   },
//   content_container: {
//     flex:1,
//     margin:5,
//   },
//   header_container: {
//    flex:3,
//    flexDirection:'row'
//   },
//   title_text: {
//    fontWeight: 'bold',
//    fontSize: 20,
//    flex: 1,
//    flexWrap: 'wrap',
//    paddingRight: 5,
//   },
//   vote_text: {
//     fontWeight: 'bold',
//     fontSize: 26,
//     color: '#666666'
//   },
//   description_container: {
//    flex: 7
//   },
//   description_text: {
//     fontStyle: 'italic',
//     color: '#666666'
//   },
//   date_container: {
//    flex: 1
//   },
//   date_text: {
//     textAlign: 'right',
//     fontSize: 14
//   },
// button_form: {
//   width: 80,
//   margin:5,
//   backgroundColor:'yellow'
// },

// customBtnText: {
//   fontSize: 20,
//   fontWeight: "400",
//   color: "#fff",
//   textAlign:'center',
//   marginTop:5
//   },

/* Here style the background of your button */
// customBtnBG: {
// backgroundColor: "#0CC17C",
// paddingHorizontal: 30,
// paddingVertical: 5,
// borderRadius: 5,
// margin:10,
// height:53
// },
// textInput_form: {
//   paddingHorizontal: 30,
//   paddingVertical: 5,
//   borderRadius: 5,
//   margin:10,
//   height: 45,
//   borderColor: '#0CC17C',
//   borderWidth: 1,
//   marginBottom:1,
//   }
// });
