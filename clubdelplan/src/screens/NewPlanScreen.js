import React from "react";
import { View , StyleSheet,TextInput} from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';

const NewPlanScreen = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [password, onChangeNumber] = React.useState(null);

  return (
    <View>


      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="email"
        placeholderTextColor="#808080" 
        value={text}
      />
      <PasswordInputText
        style={{borderWidth: 1, margin: 10, borderRadius: 10}}
        value= {password}
        onChangeText= {(password)=> onChangeText({password})}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  tittle : {color: 'black',textAlign: 'center', fontSize: 20, marginBottom: 50},
  view : {
    flex: 1,
    justifyContent: 'center',
    
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color : '#111'
  },
});

export default NewPlanScreen;