//Imports
import React, {Component} from 'react';
import {AppRegistry, View, Text, Button} from 'react-native';

//Style

//Components

//Passando valores para components utilizando {props}

class rpsgame extends Component {
  constructor(props){
    super(props);

    this.state = {choice: ''};
  }

  jokenpo(userChoice) {
    this.setState({choice: userChoice}); // alterando o state de acordo com a chamada
  }

  render() {
    return (
      <View>
        <Text>Computer: </Text>
        <Text>Player: {this.state.choice}</Text>
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
