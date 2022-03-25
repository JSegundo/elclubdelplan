import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import eventos from '../utils/fakeData';

const HomeScreen = () => {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.text}>
      <Text style={styles.text}>HOME SCREEN</Text>
      <TextInput style={styles.input} placeholder='searh for a plan'></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 16,
    paddingVertical: 8,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  input: {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1
  }
});

export default HomeScreen;
