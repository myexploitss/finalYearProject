import * as React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckBox, Button } from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropDownComponent from '../theme/dropDown';
import CheckBoxComponent from '../theme/checkBox'
import ButtonComponent from '../theme/Button';
// import dropDownComponent from '../theme/dropDown';


export interface selectorsProps {
}


export default class selectorsComponent extends React.Component<selectorsProps, any> {
    constructor(props: selectorsProps) {
        super(props);
        this.state = {
        requestData:{}
        };
    }

    repairRequest(){
        fetch("",{
            method:"Post",
            headers:{
                'Content-Type':'Application/json'
            },
            body:JSON.stringify({
                "laptopCompany": this.state.form.laptopCompany,
                "laptopSeries":   this.state.form.laptopSeries,
                "laptopModel":this.state.form.laptopModel,
                "selectItem":this.state.form.item,
                
                "":this.state.form.email,
                "password":this.state.form.pasword
                
            })
        }).then((data:any) => {
            console.log("Request sent");
        })
    }
    
    public render() {

        return (
            <ScrollView>
                <View style={styles.container} >
                    {/* <Text style={styles.bar} >Welcom to SystemFixer</Text> */}
                   
                    <View style={styles.dropdet} >
          <DropDownPicker
                        placeholder="Select laptop company"
                        containerStyle={{ height:50 }}
                        dropDownStyle={{ backgroundColor: '#fafafa',  }}
                        // marginTop: 1
                        // itemStyle={{ padding: 15, }}
                        labelStyle={{ fontSize: 15, color: 'gray' }}
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
      <View style={{  paddingRight: hp('2'),paddingLeft: hp('2'),paddingTop: hp('1.5'),}} >
        <TextInput style={styles.textInput} onChangeText={(text) => console.log(text)} placeholder={"Enter Laptop Series"}/>
        
      </View>
      <View style={{  paddingRight: hp('2'),paddingLeft: hp('2'),paddingTop: hp('1.5'),}} >
        <TextInput style={styles.textInput} onChangeText={(text) => console.log(text)} placeholder={"Enter Laptop Model"}/>
        
      </View>
                    <Text style={styles.problem} >select your problems</Text>
                    <CheckBoxComponent></CheckBoxComponent>
                    <Text style={styles.problem}>Important Notice</Text>
                    <Text style={styles.problem} > Charges (RS. 200) may apply on every Order placed If the machine is taken to our lab, Bill amount will be confirmed once the issue is diagnosed Payment Mode : Cash Only.</Text>
                    <View  style={{  padding: hp('2')}}>
                    <Button title="Send Request" ></Button>
                                    </View>
                                
                    </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dropdet: {
        paddingTop: hp('1.5'),
        paddingRight: hp('2'),
        paddingLeft: hp('2'),
    },

    problem: {
        fontSize: 15,
        paddingTop: hp('.5'),
        paddingRight: hp('2'),
        paddingLeft: hp('2'),
    },
    bar: {
        textAlign: 'center',
        padding: 12,
        fontSize: 16,
        color: 'white',
        backgroundColor: '#343aeb',
    },
    textInput: {
        justifyContent: "center",
        alignItems: "center",
        textAlign:'center',
// borderWidth:1,
        height: 50,
        // borderColor: "black",
        backgroundColor: 'white',
        padding: 15,
        fontSize: 15,
      }

});
