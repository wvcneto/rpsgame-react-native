//Imports
import React, {Component} from 'react';
import {AppRegistry, View, Text, Button} from 'react-native';

//Style

//Components

class MyComponent extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.prop1}</Text>
      </View>
    );
  }
}

//Passando valores para components utilizando {props}

class rpsgame extends Component {
  constructor(props) {
    super(props);

    this.state = {texto: 'Texto Teste'};
  }

  //Utilizando {states} para alterar valores de um component
  changeText() {
    this.setState({texto: 'Outro Texto'});
  }

  render() {
    return (
      <View>
        <MyComponent prop1={this.state.texto} />
        <Button
          title="Press"
          onPress={() => {
            this.changeText();
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('rpsgame', () => rpsgame);
