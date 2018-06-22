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
    backgroundColor: '#F5FCFF',
    alignItems:'center',
    justifyContent:'center'
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
  };

  reduce = () => {
    this.props.rootStore.reduce();
  };

  reset = () => {
    this.props.rootStore.reset();
  };

  fetchData = () => { 
    this.props.rootStore.fetchData();
  };

  render() {
    const { data } = this.props.rootStore;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native-FEI!
          <Text>{data.sum}</Text>
        </Text>
        <View>
          <Text style={{ color: '#f00' }}>{
            JSON.stringify(data.githubData, null,4)
          }</Text>
        </View>
        <Button title="Add" onPress={this.add} />
        <Button title="Reduce" onPress={this.reduce} />
        <Button title="Reset" onPress={this.reset} />
        <Button title="Fetch" onPress={this.fetchData} />
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

