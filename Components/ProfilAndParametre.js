import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { data } from '../donnee/detailUser';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from '@ui-kitten/components';

import { Card, Header } from 'react-native-elements';


const Detail = (props) => {
    return (
  
          <SafeAreaView style={{height: '100%', marginBottom: 200, top: 130}}>
              <View style={{flexDirection: 'row'}}>
              <View style={{marginHorizontal: 40, top: -100}}>
            <View style={{}}> 
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  fontWeight: 'bold',
                  fontFamily: 'Montserrat',
                }}>
                {props.event.nom}
              </Text>
            </View>
            <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#0CC17C',
                    fontWeight: 'bold',
                    fontFamily: 'Montserrat',
                  }}>
                  {props.event.status}
                </Text>
              </View>
              </View>
               <View>
 
               <Button
                style={styles.button}>
                Modifier
                </Button>
              </View> 
              </View>
             <View style={{top: -50}}>
                 <View style={{flexDirection: 'row', marginHorizontal: 35, marginBottom: 20}}>
                 <Icon size={20} color={'#0CC17C'} {...props} name="bell" />
                 <Text style={{marginHorizontal: 30}}>Notifications</Text>
                 <Text></Text>

                 </View>
                 <View style={{flexDirection: 'row', marginHorizontal: 35, marginBottom: 20}}>
                 <Icon size={20} color={'#0CC17C'} {...props} name="cog" />
                 <Text style={{marginHorizontal: 30}}>Géneral</Text>
                 <Text></Text>

                 </View>
                 <View style={{flexDirection: 'row', marginHorizontal: 35, marginBottom: 20}}>
                 <Icon size={20} color={'#0CC17C'} {...props} name="user" />
                 <Text style={{marginHorizontal: 30}}>Mon compte</Text>
                 <Text></Text>

                 </View>
                 <View style={{flexDirection: 'row', marginHorizontal: 35, marginBottom: 20}}>
                 <Icon size={20} color={'#0CC17C'} {...props} name="question-circle" />
                 <Text style={{marginHorizontal: 30}}>A propos</Text>
                 <Text></Text>

                 </View>
  
            </View>
          </SafeAreaView>
    );
  };


export default function DetailEmployer() {
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
              <View>
              <Icon style={styles.icon} name="arrow-left"   />
              </View>
              <View style={{marginHorizontal: 40}}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Profil et paramètres</Text>
              </View>
              <View></View>
          </View>
          <View>

            <Image source = {require('../assets/33.jpg')} 
            style= {{ width: 375, height: 242 }} />
        </View>
        <View>
        <View style= {styles.content}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Detail event={item} />}
          />
          </View>
          <View style={styles.eventCardSecond}>

          </View>
          </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
      container:{
          backgroundColor: 'white'
      },
      header:{
        height: 65,
        backgroundColor: '#0CC17C',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center'
      },
      icon:{
          color: 'white',
          fontSize: 22,
      },
      content: {
        backgroundColor: 'white',
        width: '90%',
        height: '59%',
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.8,
         shadowRadius: 5,
         elevation: 1,
         zIndex: 0,
        marginHorizontal: 20,
        top: -70,
      },
      eventCardSecond: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        zIndex: 1,
        elevation: 1,
        height: 200,
        width: '100%',
        top: -80,
        borderBottomColor: 'white',
      },
      button:{
          backgroundColor: '#0CC17C',
          width: 96,
          height: 40,
          top: -100,
          marginHorizontal: -20,
          color: 'white',
          borderColor: '#0CC17C'
      },
    
  });


  