import React, { Component } from 'react';
import { Text ,View,Button,TextInput,StyleSheet,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Alert,   TouchableHighlight  } from 'react-native';
import { Actions } from 'react-native-router-flux';
class Menu extends Component {
      _onPressButton1() {
    Alert.alert('Coming soon!')
  }
  _onPressButton2(){
    Actions.FindJob();
  }
_onPressButton3(){
      Alert.alert('Coming soon!')
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton3} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>VERDİĞİM İŞLER</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton1} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>YÜRÜTÜLEN İŞLER</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton2} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>İŞ BUL</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    alignItems: 'center'
  },
  button: {
    marginBottom: 40,
    width: 350,
    alignItems: 'center',
    backgroundColor: '#4d4dff'
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize:25
  }
})

export default (Menu);
