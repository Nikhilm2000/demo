import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Details from './Details';

const Home = ({ navigation }) => {
    const [username, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize:25,color:'red'}}>Enter Your Details</Text>
            <TextInput style= {{height: 40, width:100,
    margin: 12,
    borderWidth: 1,
    padding: 10}} placeholder="Name"
        onSubmitEditing={(value) => setName(value.nativeEvent.text)}
      />
      <TextInput style= {{height: 40, width:100,
    margin: 12,
    borderWidth: 1,
    padding: 10}} placeholder="Age"
        onSubmitEditing={(value) => setAge(value.nativeEvent.text)}
      />
      <TextInput style= {{height: 40, width:100,
    margin: 12,
    borderWidth: 1,
    padding: 10}} placeholder="Email"
        onSubmitEditing={(value) => setEmail(value.nativeEvent.text)}
      />
            <TouchableOpacity onPress={() => navigation.navigate('Details', { username, age, email })}>
                <Text style={{color:'#db0000'}}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home