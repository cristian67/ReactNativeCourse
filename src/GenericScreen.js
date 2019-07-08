import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class GenericScreen extends Component {
  render() {
    return (
      <View>
        <View 
          style={{
            marginTop:20,
            height:56,
            backgroundColor:"#eeeeee",
            alignItems:"center",
            justifyContent:"center"
            
          }}
        >
          <Text style = {{fontWeight:"bold"}} > Titulo</Text>
        </View>
        {/* Content */}
      </View>
    );
  }
}

