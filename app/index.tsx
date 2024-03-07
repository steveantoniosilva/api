import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const [message, setMessage] = useState('');

  console.log('message', message);

  async function fetchHello() {
    const response = await fetch('/api/hello');
    const data = await response.json();
    setMessage(data.message);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <TouchableOpacity onPress={fetchHello}>
        <Text style={{ color: 'white' }}>Fetch Message</Text>
        <Text style={{ color: 'white' }}>{message}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
