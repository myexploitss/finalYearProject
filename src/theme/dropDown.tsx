import * as React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, StyleSheet, Text } from 'react-native';

export interface dropDownProps {
}

export default class DropDownComponent extends React.Component<dropDownProps, any> {
  constructor(props: dropDownProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.dropdet} >
          <DropDownPicker
                        placeholder="Select laptop company"
                        containerStyle={{ height:54 }}
                        dropDownStyle={{ backgroundColor: '#fafafa',  }}
                        // marginTop: 1
                        // itemStyle={{ padding: 15, }}
                        labelStyle={{ fontSize: 13, color: '#000' }}
                        // placeholderStyle={{ fontWeight: 'bold' }}
                        // activeLabelStyle={{ color: 'red' }}
                        items={[
                            { label: 'hp ', value: 'item1' },
                            { label: 'dell', value: 'item2' },
                            { label: 'intel', value: 'item2' },
                            { label: 'toshiba', value: 'item2' },
                            { label: 'daf', value: 'item2' },
                        ]}
                    />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
  dropdet: {
    paddingTop: hp('.5'),
    paddingRight: hp('2'),
    paddingLeft: hp('2'),
},
});