import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface suggestProps {
}

export default class suggestComponent extends React.Component<suggestProps, any> {
  constructor(props: suggestProps) {
    super(props);
  }

  public render() {
    return (
      <View>
         <Text>suggest Component</Text>
      </View>
    );
  }
}
