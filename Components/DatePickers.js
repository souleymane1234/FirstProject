import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2021/01/20"}
  }
 
  render(){
    return (
      <DatePicker
        style={{width: 200, top: -8,marginHorizontal: -42}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY/MM/DD"
        minDate="1950/01/01"
        maxDate="2021/01/20"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        iconSource= 'false'
        customStyles={{
          dateInput: {
            borderWidth:0
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}