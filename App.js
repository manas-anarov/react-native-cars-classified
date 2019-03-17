import React from 'react';
import { Text, View, Button,TextInput, Alert, StyleSheet, ToastAndroid} from 'react-native';

export default class App extends React.Component {
  state = {
    title: 'Merc',
    text: 'good car',
    price: '100',
  };

  send_to_server = () => {
    fetch('http://192.168.8.101:8000/api/v1/add/', {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    brand: 1,
    title: this.state.title,
    text: this.state.text,
    price: this.state.price,
  }),
  });
  }

  render() {
    return (
      <View style={styles.MyViewStyle}>
        <TextInput style={styles.InputStyle}
          placeholder="Enter title"
          onChangeText={(text) => this.setState({title:text})}
          value={this.state.title}
        />

        <TextInput style={styles.InputStyle}
          placeholder="Enter text"
          onChangeText={(text) => this.setState({text:text})}
          value={this.state.text}
        />

        <TextInput style={styles.InputStyle}
          placeholder="Enter price"
          onChangeText={(text) => this.setState({price:text})}
          keyboardType='numeric'
          value={this.state.price}
        />

        <Button       
          title="ADD CAR"
          onPress={() => 
            {
              if(this.state.title == '' || this.state.text == '' || this.state.price == '')
                {
                  Alert.alert("Please Enter All the Values.");
                }
                else{
                  this.send_to_server();
                }
            }
        }
        />
      </View>   
    );
  }
  
}


const styles = StyleSheet.create({
   MyViewStyle: {
        flex: 1, justifyContent: "center", alignItems: "center", marginTop: 25 
    },
    InputStyle: {
        marginTop: 10,
        marginBottom: 15,
    }
});