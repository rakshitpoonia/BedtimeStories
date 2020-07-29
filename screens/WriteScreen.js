import * as React from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import { Header } from 'react-native-elements';

  
export default class StoryWriting extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Header
          backgroundColor={'#de83f2'}
          centerComponent={{
            text: 'Bedtime Stories',
            style: { color: '#fff', fontSize: 25 },
          }}
        />

        <TextInput
          style={styles.inputBox}
          multiline={true}
          placeholder="Write your story here"
        />
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputBox: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    height: 400,
    alignText:'left',
    borderWidth: 4,
    outline: 'none',
    
  },
});