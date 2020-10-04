import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default class App extends Component {

constructor(){
    super();
    this.state = {
      counter: 0,
      buttonColor: 'cyan'
    }
}

componentDidMount(){
  setInterval(this.incrementCounter, 1000);
}

incrementCounter = () =>{
  this.setState({counter: this.state.counter + 1})
}

colorChange = () =>{
  var letters = '0123456789ABCDEF';
  var color = '#';
  for(var i = 0; i < 6; i++){
    color+= letters[Math.floor(Math.random()*16)];
  }
  this.setState({buttonColor: color})
}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginTop: 50, marginLeft: 170 }}>
          {this.state.counter}
        </Text>
        <Button title = "Click Me For Colour Change" color = {this.state.buttonColor}
          onPress = {this.colorChange} 
         />
      </View>
    );
  }
}
