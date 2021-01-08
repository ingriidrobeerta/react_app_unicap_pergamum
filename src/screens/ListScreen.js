import React, { Component } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';

export default class ListScreen extends Component {
  state = {
    isLoading: true,
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  onSelect(id, livro){
    let data = {
      cod_livro: id,
      matricula: this.props.navigation.getParam('matricula'),
      cookie: this.props.navigation.getParam('token'),
    };
    

    let config = {
      headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json',
        'accept-encoding': 'gzip, deflate',
      },
    };
    axios
        .post('http://rmlocareceptivos.com.br/react/renova_livro.php', data, config)
        .then(res => {
          if(res.data == '0'){
            Alert.alert('Erro ao renovar livro!');
          }
          else{
            Alert.alert('Livro ' + livro + ' renovado com sucesso!');
          }
          console.log(res.data);
        });
    console.log(id +' '+ this.props.navigation.getParam('matricula')  + ' ' + this.props.navigation.getParam('token'));
  }

  fetchData = async () => {
    const response = await fetch(
      'http://rmlocareceptivos.com.br/react/livros.php?token=' +
        this.props.navigation.getParam('token')
    );
    const json = await response.json();
    this.setState({ 
      data: json,
      isLoading: false
    });
  };
  
  render() {
    
    console.log(this.state.data);
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Livros emprestados</Text>

        <FlatList
          keyExtractor={(x, i) => i.toString()}
          data = {this.state.data}
          extraData={this.state.data}
          renderItem={({ item }) => 
            
              <TouchableOpacity style={styles.textButton}
                onPress={() => this.onSelect(item.id, item.livro)}>
                <Text style={styles.textListStyle}>
                  Título: {item.livro}
                  {'\n'}Data de devolução: {item.data}
                </Text>
              </TouchableOpacity>
              
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textListStyle: {
    textVerticalAlign: 'center',
    marginLeft: 20,
  },
  textStyle: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  textButton: {
    marginVertical: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 80,
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#ADD8E6',
    borderColor: '#7997A1',
  },
  viewStyle: {
    flex: 1,
    padding: 20,
    margin: 10,
    borderColor: 'lightblue',
    borderRadius: 10,
    borderWidth: 3,
    borderStyle: 'dotted',
  },
});
