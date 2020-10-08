import * as React from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';
import StarRating from 'react-native-star-rating';


export interface issuesProps {
}

export interface issuesState {
}

export default class issuesComponent extends React.Component<issuesProps, issuesState> {
  constructor(props: issuesProps) {
    super(props);
    this.state = {
      starCount: 3.5

    };
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  public render() {
    return (
      <ScrollView>

        <View style={styles.container} >
          {/* <AirbnbRating
  count={11}
  reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
  defaultRating={11}
  size={20}
/> */}

          <View>
            <StatusBar backgroundColor="#0984e3" />


          </View>

          <Card >
            <View style={styles.username}>
              <Image source={require('../screens/assets/756295.jpg')} style={styles.swiperimg} ></Image>
              <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                <Text style={styles.detail} >Hassem mehboob</Text>
                <Text style={styles.detail} >Lahore</Text>
              </View>
            </View>
            <StarRating
              containerStyle={{ marginLeft: 200 }}
              disabled={false}
              maxStars={5}
              starSize={25}
              rating={this.state.starCount}
              selectedStar={(rating: any) => this.onStarRatingPress(rating)}
            />
            <View style={{ paddingTop: 10, }}>

              <View style={styles.userdata}>
                <Text style={styles.detail} >Charges :</Text>
                <Text style={styles.detail1} >300</Text>
              </View>
              <View style={styles.userdata}>
                <Text style={styles.detail} >PHONE   :</Text>
                <Text style={styles.detail1} >03060088025</Text>
              </View>
              <View style={styles.userdata}>
                <Text style={styles.detail} >Shope Adress  :</Text>
                <Text style={styles.detail1} >hafeez center plaza  floor  3rd shop no lg 20</Text>
              </View>
              <View style={styles.userdata}>
                <Text style={styles.detail} >About Myself  :</Text>
                <Text style={styles.detail1} >i had a lot of technical skills i am working from last 10 years  etc bla bla </Text>
              </View>

            </View>


          </Card>
          <Card >
            <View style={styles.username}>
              <Image source={require('../screens/assets/756295.jpg')} style={styles.swiperimg} ></Image>
              <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                <Text style={styles.detail} >Bilal Majed</Text>
                <Text style={styles.detail} >okara</Text>
              </View>
            </View>
            <StarRating
              containerStyle={{ marginLeft: 200 }}
              disabled={false}
              maxStars={5}
              starSize={25}
              rating={this.state.starCount}
              selectedStar={(rating: any) => this.onStarRatingPress(rating)}
            />
            <View style={{ paddingTop: 10, }}>

              <View style={styles.userdata}>
                <Text style={styles.detail} >Charges :</Text>
                <Text style={styles.detail1} >non</Text>
              </View>
              <View style={styles.userdata}>
                <Text style={styles.detail} >PHONE   :</Text>
                <Text style={styles.detail1} >03060088025</Text>
              </View>
              <View style={styles.userdata}>
                <Text style={styles.detail} >Shope Adress  :</Text>
                <Text style={styles.detail1} >hafeez center plaza  floor  3rd shop no lg 20</Text>
              </View>
              <View style={styles.userdata}>
                <Text style={styles.detail} >About Myself  :</Text>
                <Text style={styles.detail1} >i had a lot of technical setc bla bla </Text>
              </View>

            </View>


          </Card>
           <Card >
            <View style={styles.username}>
              <Image source={require('../screens/assets/756295.jpg')} style={styles.swiperimg} ></Image>
              <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                <Text style={styles.detail} >Hassem mehboob</Text>
                <Text style={styles.detail} >Lahore</Text>
              </View>
            </View>
            <StarRating
              containerStyle={{ marginLeft: 200 }}
              disabled={false}
              maxStars={5}
              starSize={25}
              rating={this.state.starCount}
              selectedStar={(rating: any) => this.onStarRatingPress(rating)}
            />
            <View style={{ paddingTop: 10, }}>

              <View style={styles.userdata}>
                <Text style={styles.detail} >Charges :</Text>
                <Text style={styles.detail1} >300</Text>
              </View>
              <View style={styles.userdata}>
                <Text style={styles.detail} >PHONE   :</Text>
                <Text style={styles.detail1} >03060088025</Text>
              </View>
              <View style={styles.userdata}>
                <Text style={styles.detail} >Shope Adress  :</Text>
                <Text style={styles.detail1} >hafeez center plaza  floor  3rd shop no lg 20</Text>
              </View>
              <View style={styles.userdata}>
                <Text style={styles.detail} >About Myself  :</Text>
                <Text style={styles.detail1} >i had a lot of technical skills i am working from last 10 years  etc bla bla </Text>
              </View>

            </View>


          </Card>
          

          {/* <Card


            titleStyle={{ backgroundColor: '#0984e3', color: 'white', borderRadius: 5, padding: 6 }}
            title=' Company :  Hp' >

            <View style={{ flexDirection: 'row' }}>


              <View style={styles.container} >


                <View style={styles.username}>
                  <Text style={styles.detail} >Laptop Series :</Text>
                  <Text style={styles.detail1} >follio</Text>
                </View>
                <View style={styles.username}>
                  <Text style={styles.detail} >Laptop Model  :</Text>
                  <Text style={styles.detail1} >1040</Text>
                </View>
                <View style={styles.username}>
                  <Text style={styles.detail} >Issue :</Text>
                  <Text style={styles.detail1} >Display</Text>
                </View>
                <View style={styles.username}>
                  <Text style={styles.detail} >PHONE :</Text>
                  <Text style={styles.detail1} >03060088025</Text>
                </View>
              </View>
            </View>
          </Card> */}
          {/* <Card  titleStyle={{backgroundColor:'#0984e3',color:'white',borderRadius:5, padding:6}} title='Hassem Mehboob' >
              <View style={{ flexDirection: 'row' }}>

                  <View style={styles.container} >
                      
                      <View style={styles.userdata}>
                          <Text style={styles.detail} >DEPARTMENT : </Text>
                          <Text style={styles.detail1} >DCN</Text>
                      </View>
                      <View style={styles.userdata}>
                          <Text style={styles.detail} >CLASS : </Text>
                          <Text style={styles.detail1} >BSCS</Text>
                      </View>
                      <View style={styles.userdata}>
                          <Text style={styles.detail} >PHONE : </Text>
                          <Text style={styles.detail1} >03060088025</Text>
                      </View>
                  </View>

                  <View style={styles.bloodname} >
                      <View style={styles.find} >

                      <Text style={styles.bloodgroup} >A+</Text>
                      </View>
                  </View>

              </View>
          </Card> */}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  find: {
    backgroundColor: 'red',
    borderRadius: 100,
    height: 40,
    width: 40,
    justifyContent: 'center',


  },
  container: {
    flex: 1,

  },
  detail: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    flex: 1,
  },
  userdata: {
    flexDirection: 'row',
    paddingTop: 10
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  detail1: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'serif',
    flex: 2
  },
  bloodname: {
    flex: 1,
    flexDirection: 'row-reverse',
    marginLeft: 10,
    alignItems: 'center'
  },
  bloodgroup: {

    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'serif'

  },
  swiperimg: {
    resizeMode: "cover",
    height: 80,
    width: 80,
    borderRadius: 100
  },
  logo1: {
    justifyContent: 'center',
    paddingBottom: 10,
    alignItems: 'center',
  }
});
