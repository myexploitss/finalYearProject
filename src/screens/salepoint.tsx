import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface salepointProps {
}

export interface salepointState {
}

export default class salepointComponent extends React.Component<salepointProps, salepointState> {
  constructor(props: salepointProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
         <Text>salepoint Component</Text>
      </View>
    );
  }
}
