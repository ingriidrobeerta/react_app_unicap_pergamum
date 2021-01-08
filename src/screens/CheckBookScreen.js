import React, { useState } from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity, View, TextInput } from 'react-native';

const CheckBookScreen = (props) => {
  const [titulo,setTitulo] = useState('');
  const livros = [
    { nome: 'Livro 0',
      id: 1,
      data: '19/12/2019'},
    { nome: 'Livro 1',
      id: 2,
      data: '19/11/2019'},
    { nome: 'Livro 2',
      id: 3,
      data: '19/10/2019'},
    { nome: 'Livro 3',
      id: 4,
      data: '19/09/2019'},
    { nome: 'Livro 4',
      id: 5,
      data: '19/08/2019'},
  ]
  
  return (
    <View style={styles.viewStyle}>
    <Text style={styles.text}>Busca</Text>
    <TextInput style={styles.input}
          value={titulo}
          placeholder={'Título'}
          onChangeText={(newTitle) => setTitulo(newTitle)}
      />
    <TouchableOpacity  style={styles.textButton}onPress={() => props.navigation.navigate('Book')}>
      
      <Text style={styles.innerText}>Consultar acervo</Text>
    </TouchableOpacity>
    <FlatList 
      keyExtractor={livro => livros.nome}
      data = {livros}
      renderItem={({item}) =>{
        return (
            <View style={styles.textButton2}>
            <Text style={styles.textListStyle}>Título: {item.nome}{"\n"}Data de devolução: {item.data}</Text>
            </View>
        );
      }}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  input: {
    margin: 15,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1
  },
  innerText: {
    textAlign: 'center'
  },
   textButton: {
    paddingHorizontal: 20,
    height: 30,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#7997A1'
  },
  textButton2: {
    marginVertical: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#ADD8E6',
    borderColor: '#7997A1'
  },
  textListStyle:{
    textVerticalAlign: 'center',
    marginLeft: 20
  },
  viewStyle: {
    flex: 1,
    padding: 20,
    margin:10,
    borderColor: 'lightblue',
    borderRadius: 10,
    borderWidth: 3,
    borderStyle: 'dotted'
  }

});

export default CheckBookScreen;