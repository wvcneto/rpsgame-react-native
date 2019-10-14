import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

//Style

const Style = StyleSheet.create({
  resultView: {
    alignItems: 'center',
  },
  textResult: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  iconResultView: {
    alignItems: 'center',
    margin: 20,
  },
  textResultView: {
    fontSize: 20,
  },
});

//Component

class Result extends Component {
  render() {
    //this.props.choice
    //this.props.player
    if (this.props.choice === 'Rock') {
      return (
        <View style={Style.iconResultView}>
          <Text style={Style.textResultView}>{this.props.player}</Text>
          <Image source={require('../../img/pedra.png')} />
        </View>
      );
    } else if (this.props.choice === 'Paper') {
      return (
        <View style={Style.iconResultView}>
          <Text style={Style.textResultView}>{this.props.player}</Text>
          <Image source={require('../../img/papel.png')} />
        </View>
      );
    } else if (this.props.choice === 'Scissors') {
      return (
        <View style={Style.iconResultView}>
          <Text style={Style.textResultView}>{this.props.player}</Text>
          <Image source={require('../../img/tesoura.png')} />
        </View>
      );
    } else {
      return false;
    }
  }
}

export default Result;
