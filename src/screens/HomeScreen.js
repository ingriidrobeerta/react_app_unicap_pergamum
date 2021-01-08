import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  AsyncStorage,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
 
  console.log(navigation.getParam('token') + "HomeScreen");
  
  

  return (
    <View style={styles.viewStyle}>
      <Image
        source={require('../assets/catolica.PNG')}
        style={styles.imageStyle}
      />
      <TouchableOpacity
        style={styles.textButton}
        onPress={() => navigation.navigate('List', {
          token: navigation.getParam('token'),
          matricula: navigation.getParam('matricula')
        })}>
        <Text style={styles.textSecond}>Renovação</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.textButton}
        onPress={() => navigation.navigate('Book')}>
        <Text style={styles.textSecond}>Consulta</Text>
      </TouchableOpacity>
      <Image
          style={{width: 150, height: 150, borderRadius: 150/2}}
          source={{uri: 'http://rmlocareceptivos.com.br/react/imagem.php?matricula=' + navigation.getParam('matricula')}}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    marginBottom: 50,
  },
  viewStyle: {
    flex: 1,
    padding: 20,
    margin:10,
    borderColor: 'lightblue',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 3,
    borderStyle: 'dotted'
  },
  textButton: {
    height: 50,
    width: 300,
    marginBottom: 30,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#7997A1'
  },
  textSecond: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default HomeScreen;
