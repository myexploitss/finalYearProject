import * as React from 'react';
import { View, StyleSheet, Text,ScrollView } from 'react-native';

export interface suggestProps {
}

export default class suggestComponent extends React.Component<suggestProps, any> {
  constructor(props: suggestProps) {
    super(props);
  }

  public render() {
    return (
      <ScrollView >

      <View  style={styles.container} >
         <Text style={styles.heading} >Doctor Suggestions</Text>
         <Text style={styles.detailsmal} >Laptop Doctor always cares for his customers and their machines. Being a laptop user, you should be knowing few basic tips in order to prolong your laptop's life and efficiency.</Text>
         <Text style={styles.detail} >1:Cooling Fan</Text>
         <Text style={styles.detailsmal} >Being a karachiite you should avoid laptops with Graphic Cards, the warm weather of city isn't supportive in this case. If you wish to have a machine with graphic card in karachi, you must keep a Cooling Fan in order to avoid Heat up problem.</Text>
         <Text style={styles.detail} >2: Place laptop on hard surface</Text>
         <Text style={styles.detailsmal} >While using laptop be sure to place it on a hard surface so that there may be a space between the laptop base and the surface on which it has been placed. Otherwise again the same problem that it won’t be able to take fresh air in and give out hot air because of the closed vents. So always be sure to use laptop on something hard or else in your lap at such an angle where the vents are just open.</Text>
         <Text style={styles.detail} >3: Batery Life</Text>
         <Text style={styles.detailsmal} >While watching movies or performing timely tasks on our machine, always pull off the Charger once your Battery is fully charged (100%). Use the complete battery backup otherwise it could cause battery cells to weaken up and reduce your battery backup. If you will utilize your battery backup, it will ensure your battery to last longer and serve you with better backup.</Text>
         <Text style={styles.detail} >4: Clean keyboard</Text>
         <Text style={styles.detailsmal} >As tempting as it might be to drink coffee, soda, water or any other liquid near your laptop, accidents can happen all too easily. Alternatively, use a cup with a cover on it, so even if it does spill, the liquid doesn't go anywhere. Spilled liquids may damage the internal microelectronic components or cause electrical damage. Short circuits can corrupt data or even permanently destroy some parts of the laptop. The solution is very simple: Keep your drinks away from your computer. Even if you are careful, someone else might spill your drink. Also, don't eat over your laptop, the crumbs can fall between the keys and provide an invitation to small bugs or damage the circuitry. </Text>

      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
flex: 1,
margin: 10

  },
  heading:{
    color:'black' ,
    fontSize:25,
    fontFamily:'serif',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign:'center',
    padding:10
  },
  detail:{
    fontSize:20,
    fontWeight: 'bold',
    paddingTop:10

  },
  detailsmal:{
fontSize:17,
paddingTop:10
  },
});