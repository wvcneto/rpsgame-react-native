//Imports
import React, { Component } from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';

//Style

//Components

//Passando valores para components utilizando {props}

class rpsgame extends Component {
  constructor(props) {
    super(props);

    this.state = { userChoice: '', computerChoice: '' };
  }

  jokenpo(choice) {
    var rand = Math.floor(Math.random() * 3);
    var compChoice = '';

    switch (rand) {
      case 0:
        compChoice = 'Rock';
        break;
      case 1:
        compChoice = 'Paper';
        break;
      case 2:
        compChoice = 'Scissors';
        break;
    }
    this.setState({userChoice: choice, computerChoice: compChoice}); // alterando o state de acordo com a chamada
  }

  render() {
    return (
      <View>
        <Text>Computer: {this.state.computerChoice}</Text>
        <Text>Player: {this.state.userChoice}</Text>
        <Text>Resultador: </Text>
        <Button
          title="Rock"
          onPress={() => {
            this.jokenpo('Rock');
          }}
        />
        <Button
          title="Paper"
          onPress={() => {
            this.jokenpo('Paper');
          }}
        />
        <Button
          title="Scissors"
          onPress={() => {
            this.jokenpo('Scissors');
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('rpsgame', () => rpsgame);
