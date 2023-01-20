
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';

const FourthClass = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text style={{color: 'black'}}>
              Movie Name:{item.title}, Year: {item.releaseYear}
            </Text>
          )}
        />
      )}
       <TouchableOpacity onPress={() => navigation.navigate('FifthClass')}>
        <Text
          style={{
            fontSize: 30,
            color: '#db0000',
            backgroundColor: 'black',
            textAlign: 'center',
            height: 55,
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

export default FourthClass;
