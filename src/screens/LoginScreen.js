import React, { Component } from 'react';
import axios from 'axios';
import {
  Alert,
  Button,
  TextInput,
  Text,
  View,
  StyleSheet,
  Image,
  ToastAndroid,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      show: false
    };

  }
  
  onLogin() {
    this.setState({
      show:true
    });
    const { username, password } = this.state;
    let response;
    let storeData;
    let data = {
      matricula: username,
      senha: password,
    };
    

    let config = {
      headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json',
        'accept-encoding': 'gzip, deflate',
      },
    };
    if (username.length != 0 || password.length != 0) {
      axios
        .post('http://rmlocareceptivos.com.br/react/login.php', data, config)
        .then(res => {
          response = res.data;
          
          if (response != '0') {
            this.setState({
              show:false
            });
            this.props.navigation.navigate('Home', {
              token: response,
              matricula: username
            });
          } else {
            this.setState({
              show:false
            });
            Alert.alert('Matricula ou senha errada');
          }
        });
    } else {
      this.setState({
        show:false
      });
      Alert.alert('Insira seus dados');
    }
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/catolica.PNG')} />
        {
          this.state.show? <Image style={styles.loading} source={require('../assets/loading.gif')} />:null
        }
        <Text style={styles.textStyle}>Acesso ao usuário</Text>
        <TextInput
          keyboardType="numeric"
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          placeholder={'Matrícula'}
          style={styles.input}
        />
        <TextInput
          keyboardType="numeric"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder={'Senha'}
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={'Acessar'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    width:50,
    height:50,
    opacity:1
  },
  textStyle: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});