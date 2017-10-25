import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Login from './Components/Login';
import Register from './Components/Register';
import FindJob from './Components/FindJob';
import Menu from './Components/Menu';
import JobForm from './Components/JobForm';
import { Actions } from 'react-native-router-flux';




const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
}

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
          <Scene key="login" title="Login" icon={TabIcon}>
            <Scene key="Login" component={Login} title="Login" />
          </Scene>
          <Scene key="Register" title="Register" icon={TabIcon}>
            <Scene key="Regiser" component={Register} title="REGISTER" />
          </Scene>
        </Scene>
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.jobform()}
          rightTitle="Yeni iş ekle"
          leftTitle='Çıkış'
          onLeft={() => Actions.auth()} 
          key="menu"
          component={Menu}
          title="Menu"
          initial
        />
        <Scene key='jobform' component={JobForm} title='Yeni iş ekle' />    
      <Scene key="FindJob" component={FindJob} title="Find Job" />
            
      </Scene>



    </Router>
  );
};



export default RouterComponent;