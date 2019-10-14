//Imports
import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';

//Style

//Components

class MyComponent extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.prop1}</Text>
        <Text>{this.props.prop2}</Text>
        <Text>{this.props.prop3}</Text>
      </View>
    );
  }
}

//Passando valores para components utilizando props

class rpsgame extends Component {
  render() {
    return <MyComponent prop1="Café" prop2="Chocolate" prop3="Frutas" />;
  }
}

AppRegistry.registerComponent('rpsgame', () => rpsgame);
