//Imports
import React, {Component} from 'react';
import {AppRegistry, View, Text, Button} from 'react-native';

import Top from './src/components/top';
import Result from './src/components/result';

//Style

const Style = {
  mainView: {
    flex: 1,
  },
  btn: {
    width: 100,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  textResult: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
};

//Components

//Passando valores para components utilizando {props}

class rpsgame extends Component {
  constructor(props) {
    super(props);

    this.state = {userChoice: '', computerChoice: '', result: ''};
  }

  jokenpo(userChoice) {
    const rand = Math.floor(Math.random() * 3);
    let computerChoice = '';

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
      default:
        computerChoice = '';
    }

    let result = '';

    if (computerChoice === 'Rock') {
      if (userChoice === 'Rock') {
        result = 'Draw';
      }
      if (userChoice === 'Paper') {
        result = 'You Won';
      }
      if (userChoice === 'Scissors') {
        result = 'You Lost';
      }
    } else if (computerChoice === 'Paper') {
      if (userChoice === 'Rock') {
        result = 'You Lost';
      }
      if (userChoice === 'Paper') {
        result = 'Draw';
      }
      if (userChoice === 'Scissors') {
        result = 'You Won';
      }
    } else if (computerChoice === 'Scissors') {
      if (userChoice === 'Rock') {
        result = 'You Won';
      }
      if (userChoice === 'Paper') {
        result = 'You Lost';
      }
      if (userChoice === 'Scissors') {
        result = 'Draw';
      }
    }

    this.setState({
      userChoice, // userChoice : userChoice - nomes iguais auto atribuição
      computerChoice,
      result,
    }); // alterando o state
  }

  render() {
    return (
      <View style={Style.mainView}>
        <Top />
        <View style={Style.btnView}>
          <View style={Style.btn}>
            <Button
              title="Rock"
              onPress={() => {
                this.jokenpo('Rock');
              }}
            />
          </View>
          <View style={Style.btn}>
            <Button
              title="Paper"
              onPress={() => {
                this.jokenpo('Paper');
              }}
            />
          </View>
          <View style={Style.btn}>
            <Button
              title="Scissors"
              onPress={() => {
                this.jokenpo('Scissors');
              }}
            />
          </View>
        </View>
        <View style={Style.resultView}>
          <Text style={Style.textResult}>{this.state.result}</Text>
          <Result choice={this.state.userChoice} player="You" />
          <Result choice={this.state.computerChoice} player="Computer" />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('rpsgame', () => rpsgame);
