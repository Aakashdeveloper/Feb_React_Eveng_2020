import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function App() {

  const [outputText, setoutputText]= useState("Test Button on Native app")


  return (
    <View style={styles.container}>
      <Text>App with Naresh It</Text>
      <Text>{outputText}</Text>
      <Button title="Check State" onPress={()=>setoutputText('Text Change')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;