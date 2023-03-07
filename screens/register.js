import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  
  
  const handleSubmit = () => {
    // validate form fields
    if (username === '' || email === '' || password === '' || passwordConfirm === '') {
        alert('All fields are required');
        return;
    }
  
    if (password !== passwordConfirm) {
        alert('Passwords do not match');
        return;
    }
  
    // send data to server for registration
    // navigate to home screen or display success message
  }
  const {google} = require('googleapis');
  
  const writeDataToSheet = async (Username, Email ,Password, ConfirmPassword) => {
    const auth = new google.auth.GoogleAuth({
      keyFile: 'credentials.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });
  
    const sheets = google.sheets({version: 'v4', auth});
  
    const spreadsheetId = '11Zmg3appsAVtUdi5JWG29gpExfnafuZHTBPN6WyLMCo';
    const range = 'register';
  
    const values = [[Username, Email ,Password, ConfirmPassword]];
  
    const resource = {
      values,
    };
  
    try {
      const result = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        resource,
      });
  
      console.log(`${result.data.updates.updatedCells} cells appended.`);
    } catch (err) {
      console.error(err);
    }
  };
  

  

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
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

export default RegisterPage;
