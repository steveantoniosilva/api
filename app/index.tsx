import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const App = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  async function fetchHello() {
    const response = await fetch('/api-routes/hello');
    const data = await response.json();
    setMessage(data.message);
  }

  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>Blog Post</Text>
        <TextInput
          style={{
            color: 'white',
            backgroundColor: 'red',
            width: '95%',
            textAlign: 'center',
            marginVertical: 11,
            height: 111,
          }}
          onChangeText={setTitle}
          value={title}
          multiline={true}
          selectionColor={'lemonchiffon'}
          placeholder='TITLE'
          placeholderTextColor='white'
          maxLength={18}
        />
        <TextInput
          style={{
            color: 'white',
            backgroundColor: 'red',
            width: '95%',
            textAlign: 'center',
            marginVertical: 11,
            height: 111,
          }}
          onChangeText={setMessage}
          value={message}
          multiline={true}
          selectionColor={'lemonchiffon'}
          placeholder='MESSAGE'
          placeholderTextColor='white'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={fetchHello}>
          <Text style={styles.buttonText}>Fetch Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: '100%',
    textAlign: 'center',
  },
  button: {
    paddingVertical: 11,
    paddingHorizontal: 22,
    borderRadius: 33,
    borderColor: 'white',
    borderWidth: 1,
    marginVertical: 111,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
