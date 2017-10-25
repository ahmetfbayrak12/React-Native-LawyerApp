import React, { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, registerUser, usernameSurnameChanged } from '../Actions';
import Spinner from './common/Spinner';

class Register extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onUsernameSurnameChange(text) {
    this.props.usernameSurnameChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password, userName_Surname } = this.props;

    this.props.registerUser({ email, password, userName_Surname });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
        title="REGISTER"
        color='#0066ff'
        height='150'

      />
    );
  }


  render() {
    return (
      <ScrollView style={{ padding: 70 }}>

        <TextInput
          style={{ marginTop: 25, height: 50, borderColor: 'black', fontSize: 20, borderWidth: 3 }}
          placeholder='User Name/Surname'
          onChangeText={this.onUsernameSurnameChange.bind(this)}

        />
        <TextInput
          style={{ marginTop: 25, height: 50, borderColor: 'black', fontSize: 20, borderWidth: 3 }}
          placeholder='E-mail'
          onChangeText={this.onEmailChange.bind(this)}

        />
        <TextInput
          style={{ marginTop: 25, height: 50, borderColor: 'black', fontSize: 20, borderWidth: 3 }}
          placeholder='Password'
          onChangeText={this.onPasswordChange.bind(this)}
          secureTextEntry
        />


        <View style={{ padding: 25 }} />
        {this.renderButton()}
      </ScrollView>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    marginTop: 25, height: 50, borderColor: 'black', borderWidth: 3
  },
  buttonStyle: {
    margin: 10,
    height: 100,
    borderColor: 'black',
    padding: 45,
    marginTop: 10
  }

});

const mapStateToProps = ({ auth }) => {
  const { email, password, userName_Surname, uid, error, loading } = auth;

  return { email, password, error, loading, userName_Surname, uid };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, registerUser, usernameSurnameChanged
})(Register);
