import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const imgRock = require('../../img/pedra.png');
const imgPaper = require('../../img/papel.png');
const imgScissors = require('../../img/tesoura.png');

//Style

const Style = StyleSheet.create({
  resultView: {
    alignItems: 'center',
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
          <Image source={imgRock} />
        </View>
      );
    } else if (this.props.choice === 'Paper') {
      return (
        <View style={Style.iconResultView}>
          <Text style={Style.textResultView}>{this.props.player}</Text>
          <Image source={imgPaper} />
        </View>
      );
    } else if (this.props.choice === 'Scissors') {
      return (
        <View style={Style.iconResultView}>
          <Text style={Style.textResultView}>{this.props.player}</Text>
          <Image source={imgScissors} />
        </View>
      );
    }
    return false;
  }
}

export default Result;
