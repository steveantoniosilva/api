import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [message, setMessage] = useState('');

  console.log('message', message);

  async function fetchHello() {
    const response = await fetch('/api/hello');
    const data = await response.json();
    setMessage(data.message);
  }

  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>{message}</Text>
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
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  button: {
    paddingVertical: 11,
    paddingHorizontal: 22,
    borderRadius: 33,
    borderColor: 'white',
    borderWidth: 1,
  },
  buttonText: {
      color: 'white',
      fontSize: 18,
  },
});

export default App;
