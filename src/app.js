/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { Provider } from 'mobx-react';
import { inject, observer } from 'mobx-react/native';
import rootStore from './store/index';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
};

@inject('rootStore')
@observer
class App extends Component {

  add = () => {
    this.props.rootStore.add();
    console.warn(this.props.rootStore)
  };

  reduce = () => {
    this.props.rootStore.reduce();
    console.warn(this.props.rootStore)
  };

  reset = () => {
    // alert('reset');
  };

  render() {
    const { data,sum } = this.props.rootStore;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native-FEI!
          <Text>{sum}</Text>
        </Text>
        <Button title="Add" onPress={this.add} />
        <Button title="Reduce" onPress={this.reduce} />
        <Button title="Reset" onPress={this.reset} />
      </View>
    );
  }
}


export default function () {
  return (
    <Provider rootStore={rootStore}>
      <App />
    </Provider>
  );
}

