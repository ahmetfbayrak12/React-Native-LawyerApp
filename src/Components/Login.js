import React, { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, merciesFetch } from '../Actions';
import Spinner from './common/Spinner';

class Login extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password, loading } = this.props;

    this.props.loginUser({ email, password });
  }

  async componentWillMount() {
    this.props.merciesFetch();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
        title="LOGIN" />
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput style={styles.welcome}
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
        <TextInput style={styles.welcome}
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <View style={styles.buttonStyle} >
          {this.renderButton()}
        </View>

      </View>
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
  },
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }

});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, merciesFetch
})(Login);