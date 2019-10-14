//Imports
import React, { Component } from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';

//Style

//Components

//Passando valores para components utilizando {props}

class rpsgame extends Component {
  constructor(props) {
    super(props);

    this.state = {userChoice: '', computerChoice: '', result: ''};
  }

  jokenpo(userChoice) {
    var rand = Math.floor(Math.random() * 3);
    var computerChoice = '';

    switch (rand) {
      case 0:
        computerChoice = 'Rock';
        break;
      case 1:
        computerChoice = 'Paper';
        break;
      case 2:
        computerChoice = 'Scissors';
        break;
    }

    var result = '';

    if (computerChoice === 'Rock') {
      if (userChoice === 'Rock') {
        result = 'Draw';
      }
      if (userChoice === 'Paper') {
        result = 'Won';
      }
      if (userChoice === 'Scissors') {
        result = 'Lost';
      }
    } else if (computerChoice === 'Paper') {
      if (userChoice === 'Rock') {
        result = 'Lost';
      }
      if (userChoice === 'Paper') {
        result = 'Draw';
      }
      if (userChoice === 'Scissors') {
        result = 'Won';
      }
    } else if (computerChoice === 'Scissors') {
      if (userChoice === 'Rock') {
        result = 'Won';
      }
      if (userChoice === 'Paper') {
        result = 'Lost';
      }
      if (userChoice === 'Scissors') {
        result = 'Draw';
      }
    }

    this.setState({
      userChoice: userChoice,
      computerChoice: computerChoice,
      result: result,
    }); // alterando o state
  }

  render() {
    return (
      <View>
        <Text>Computer: {this.state.computerChoice}</Text>
        <Text>Player: {this.state.userChoice}</Text>
        <Text>Resultador: {this.state.result}</Text>
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
