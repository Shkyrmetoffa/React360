import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

export default class Hello360 extends React.Component {
    state = {
        count: 0,
    };

    _incrementCount = () => {
        this.setState({count: this.state.count + 1});
    };

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <VrButton
              onClick={this._incrementCount}
              style={styles.greetingButton}>
              <Text style={styles.greeting}>
                  {`Count: ${this.state.count}`}
              </Text>
          </VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    width: '30%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
  },
    greetingButton: {
      width: 100,
      backgroundColor: 'red',
    },
  greeting: {
    fontSize: 20,
      width: 100,
      textAlign: 'center',
      paddingBottom: 8
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
