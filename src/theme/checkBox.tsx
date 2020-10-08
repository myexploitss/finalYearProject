import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CheckBox} from 'react-native-elements'

export interface checkBoxProps {
}

export default class CheckBoxComponent extends React.Component<checkBoxProps, any> {
  constructor(props: checkBoxProps) {
    super(props);
  }

  public render() {
    return (
      <View>
                            <CheckBox title='Display problem' />
                            <CheckBox title='Body Broken' />
                            <CheckBox title='Charging Problem' />
                            <CheckBox title='Keyboard Not Working' />
                            <CheckBox title='Internal Service' />
                            <CheckBox title='USB Ports Not Working' />
                            <CheckBox title='Software issue' />
                            <CheckBox title='Heatup Problem' />
                            <CheckBox title='Wifi Not Working' />
                            <CheckBox title='Charging Problem' />
                            <CheckBox title='Ram Not Working' />
                            <CheckBox title='Hard Drive Corrupted' />
                            <CheckBox title='Windows/IOS Installation' />
                            <CheckBox title='others' />
      </View>
    );
  }
}
