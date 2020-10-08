import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button} from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export interface ButtonProps {
}

export default class ButtonComponent extends React.Component<ButtonProps, any> {
  constructor(props: ButtonProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.dropdet} >
           <Button  title="Apply Repair"/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
    dropdet: {
      paddingTop: hp('1'),
      paddingRight: hp('2'),
      paddingLeft: hp('2'),
      paddingBottom:hp('2')
  },
  });
