import React, { Component } from 'react';
import { TouchableOpacity, View, ActivityIndicator, Text, Alert} from 'react-native';
export default class RestSample extends Component {
handlePress = async () => {
  fetch('http://dummy.restapiexample.com/api/v1/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
})
    .then((response) => {
      const resultJson = response.json();
     Alert.alert("Author name at 0th index:"+(response.json())[1]);
    })
    .catch((error) => {
      console.error(error);
    });
}
  render(){
  return(
   <View style={{paddingTop: 50, paddingLeft: 50 }}>
   <Text> Some other text </Text>
    <Text> Some other text </Text>
    <TouchableOpacity onPress={this.handlePress.bind(this)}>
     <Text style={{paddingTop: 50, paddingLeft: 50, color: '#FF0000'}}> Click me to see the name </Text>
    </TouchableOpacity>
</View> 
  );
}
}