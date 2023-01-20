
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';

const FifthClass = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=61c4700e5033fdf25cc1b92c86b23872&language=en-US&page=1";
 
    const fetchPopularMovies = async () => {
        try {
            const response = await fetch(url);
            //console.log(response);
    
            //Checking whether the response is correct
            if (response.status === 200 ){
                const data = await response.json();
    
                let movies = "";
                //console.log(data.results);
                data.results.forEach(movie => {
                    //console.log(movie.title)
                    movies += `
                        <div class="movie">
                            <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"> 
                            <h3 class="title"> ${movie.title} </h3>
                        </div>
                        
                        
                    `;
                });

                
            } else if (response.status === 401) {
                console.log("La clave API es incorrecta. Por favor, compruébala / Your API key is incorrect. Please check it.")
            } else if (response.status === 404) {
                console.log("El recurso que solicitas no existe /  The data your request does not exist")
            } else {
                console.log("Hubo un error inesperado. Vuelve a intentarlo más tarde / Unexpected error, please retry again later")
            }
        } catch(error) {
            console.log(error);
        }
    };
  
    useEffect(() => {
      fetchPopularMovies();
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
                Movie Name:{item.title}, Year: {item.release_date}
              </Text>
            )}
          />
        )}
         <TouchableOpacity onPress={() => navigation.navigate('ThirdClass')}>
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
  
  export default FifthClass;
  