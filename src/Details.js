import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

const Details = ({navigation, route}) => {
  return (
    <View >
      <Text style={{fontSize: 30, paddingBottom: 75,color:'red'}}>Details</Text>

      <Text style={{fontSize: 20, paddingLeft: 70,color:'black'}}>
        Name - {route.params.username}
      </Text>
      <Text style={{fontSize: 20, paddingLeft: 70,color:'black'}}>
        age - {route.params.age}
      </Text>
      <Text style={{fontSize: 20, paddingLeft: 70, color:'black',paddingBottom: 200}}>
        email - {route.params.email}
      </Text>
     
      <TouchableOpacity onPress={() => navigation.navigate('FourthClass')}>
        <Text
          style={{
            fontSize: 30,
            color: '#db0000',
            backgroundColor: 'black',
            textAlign: 'center',
            height: 60,
            width: 370,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          }}>
          Popular Movies
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ThirdClass')}>
        <Text
          style={{
            fontSize: 30,
            color: '#db0000',
            backgroundColor: 'black',
            textAlign: 'center',
            height: 60,
            width: 370,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          }}>
          Search Movies
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text
          style={{
            fontSize: 20,
            color: '#db0000',
            textAlign:'center'
          }}>
          LogOut/Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
