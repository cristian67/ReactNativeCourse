import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';

import styles  from "./Styles/GenericScreenStyle";


export default class GenericScreen extends Component {
  render() {
    return (
      <View>
        <View  style={styles.navBar} >
          <Text style = {styles.title} > Titulo</Text>
        </View>
        {/* Content */}
      </View>
    );
  }
}
