import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import 'react-native-gesture-handler';
import { Formik } from 'formik';
// import * as Yup from 'yup';

export interface AppProps {
}

export default class InputComponent extends React.Component<any, any> {

  props: any;
  setState: any;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      form: {}
    }
  }
  render() {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>

          <Text style={styles.title}>Formik x React Native</Text>

          <Formik

            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={{}}

            onSubmit={(values, actions) => {
              console.log(values);
              this.setState({ form: values });

              actions.resetForm();
            }}>
            {props => (

              <View>

                <TextInput
                  onChangeText={props.handleChange('username')}
                  onBlur={props.handleBlur('username')}
                  value={props.values.username}
                  autoFocus
                  placeholder="Your username"
                  style={styles.input}
                />
                <Text style={styles.error}>{props.errors.username}</Text>
                <TextInput
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  value={props.values.email}
                  placeholder="Email Address"
                  style={styles.input}
                />
                <Text style={styles.error}>{props.errors.email}</Text>
                <TextInput
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}
                  placeholder="password"
                  style={styles.input}

                />
                <Text style={styles.error}>{props.errors.password}</Text>
                <View style={styles.button}>
                  <Button title="Create Account" onPress={props.handleSubmit}
                  ></Button>
                </View>
                <View style={styles.button}>
                  <Button
                    title="Login"
                    onPress={() => {
                      // alert("kojo")
                      this.props.navigation.navigate('login')
                    }
                    }
                  />


                </View>
              </View>
            )}

          </Formik>


        </View>
      </TouchableWithoutFeedback>
    );
  }

}









const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {

    padding: 8,
  },

  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  error: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    paddingHorizontal: 8,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',

  },
});

// export default CreateAccountScreen;