import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginPage = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleLogin = () => {
// validate form fields
if (username === '' || password === '') {
alert('Username and password are required');
return;
}


// send data to server for login
// navigate to home screen or display success message
}

return (
<View style={styles.container}>
<Text style={styles.title}>Log In</Text>
<TextInput
     style={styles.input}
     placeholder="Username"
     value={username}
     onChangeText={setUsername}
   />
<TextInput
     style={styles.input}
     placeholder="Password"
     secureTextEntry={true}
     value={password}
     onChangeText={setPassword}
   />
<TouchableOpacity style={styles.button} onPress={handleLogin}>
<Text style={styles.buttonText}>Log In</Text>
</TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#f5f5f5',
},
title: {
fontSize: 32,
fontWeight: 'bold',
marginBottom: 30,
},
input: {
width: '80%',
height: 50,
backgroundColor: '#fff',
borderRadius: 10,
paddingHorizontal: 20,
marginBottom: 20,
},
button: {
width: '80%',
height: 50,
backgroundColor: '#2e8b57',
borderRadius: 10,
justifyContent: 'center',
alignItems: 'center',
},
buttonText: {
color: '#fff',
fontSize: 24,
fontWeight: 'bold',
},
});

export default LoginPage;
