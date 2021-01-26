import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CheckBox from '@react-native-community/checkbox';

export default function Selection() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
      <View style={styles.container}>
      <View>
<CheckBox
disabled={false}
value={toggleCheckBox}
onValueChange={(newValue) => setToggleCheckBox(newValue)}
/>
</View>
<View style={styles.container_text_selection}>
<View>
<Text style={styles.text_selection}>Sélectionner tout</Text>
</View>
{/* <View>
<Text style={styles.text_annulez}>annulez</Text>

</View> */}
</View>


</View>


    );
  }
  
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row'
    },
    text_selection: {
      fontSize: 18,
    },
    // container_text_selection: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-evenly'
    // },
  });