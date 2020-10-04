import React from 'react';
import { StyleSheet, TextInput, Button, Text, View, ToastAndroid } from 'react-native';
import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Component } from 'react';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import t from 'tcomb-form-native';

let Form = t.form.Form

class PatientForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                name: 'Peter Gregrey',
                age: 24,
                sex: 'Male',
                height: 180,
                weight: 140,
                blood: 'AB',
                race: 'Caucasian',
                address: 'Mountain View',
                adm: '04/10/20',
                exm: '04/10/20',
                // cmpts: 'Anosmia, Fever, Congestion',
                // t_hist: 'Paracetamol 650 taken',
                // f_hist: 'Fever in another family member',
                // covid: true                
            }
        }
    }

    submitForm() {
        var data = this.refs.patientForm.getValue();
        if (data) {
            ToastAndroid.show('Validation successful', ToastAndroid.SHORT);
        } else {
            ToastAndroid.show('Please fix errors', ToastAndroid.SHORT);
        }
    }

    render() {
        let options = {
            fields: {
                // t_hist: {
                //     label: 'Treatment History',
                // },
                // f_hist: {
                //     label: 'Family History',
                // },
                // covid: {
                //     label: 'Covid Symptoms?',
                // },
                // cmpts: {
                //     label: 'Complaints',
                // },
                blood: {
                    label: 'Blood Group',
                },
                adm: {
                    label: 'Admission Time',
                },
                exm: {
                    label: 'Examination Time',
                },
            },
        };
        let PatientModel = t.struct({
            name: t.String,
            age: t.Number,
            sex: t.enums({M: 'Male', F: 'Female'}, 'sex'),
            height: t.Number,
            weight: t.Number,
            blood: t.String,
            race: t.String,
            address: t.String,
            adm: t.String,
            exm: t.String,
            // cmpts: t.String,
            // t_hist: t.String,
            // f_hist: t.String,
            // covid: t.Boolean
        });
        return (
            <View style={styles.main}>
                <Form
                    ref = 'patientform'
                    type = { PatientModel }
                    options = { options }
                    data = {this.state.data}
                    style = {styles.form}
                />
                <TouchableOpacity style={styles.btn} onPress={this.submitForm}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5F5CF',
      flex: 1,
      justifyContent: 'center',
    },
    // form: {
    //   fontSize: 5,  
    // },
    btn: {
      backgroundColor: 'skyblue',
      height: 40,
      color: "#ffffff",
      justifyContent: "center",
      alignItems: "center"
    },
    main: {
      flex: 1,
    //   fontSize: 10,
      alignItems: "center",
      justifyContent: "center"
    }
  });


  export default function(props) {
    const navigation = useNavigation();
  
    return <PatientForm {...props} navigation={navigation} />;
  }