import { StyleSheet, Button, Text, ScrollView, View, ToastAndroid } from 'react-native';
import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { Component, createRef } from 'react';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import t from 'tcomb-form-native';

let Form = t.form.Form;

class PatientForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                name: 'Peter Gregrey',
                age: 24,
                sex: 'Male',
                height: 180.0,
                weight: 140,
                blood: 'AB',
                race: 'White',
                address: 'Mountain View',
                adm: Date.now(),
                exm: '04/10/20',
                // cmpts: 'Anosmia, Fever, Congestion',
                // t_hist: 'Paracetamol 650 taken',
                // f_hist: 'Fever in another family member',
                // covid: true   
            }             
        }
        this.formRef = createRef();
    }

    // onChange(data) {
    //     this.setState({data});
    // }

    submitForm() {
        this.setState({data : this.formRef.current.value})
        console.warn(info);
        // var data = this.PatientForm.getValue();
        if (info) {
            ToastAndroid.show('Validation successful', ToastAndroid.SHORT);
            console.warn(data)
        } else {
            ToastAndroid.show('Please fix errors', ToastAndroid.SHORT);
        }
        // this.setState({data});
        // let info = {}
        // info.name = this.state.name,
        // info.age = this.state.age,
        // info.sex = this.state.sex,
        // info.height = this.state.height,
        // info.weight = this.state.weight,
        // info.blood = this.state.blood,
        // info.race = this.state.race,
        // info.address = this.state.address,
        // info.adm = this.state.adm,
        // info.exm = this.state.exm,
        // info.cmpts = this.state.cmpts,
        // info.t_hist = this.state.t_hist,
        // info.f_hist = this.state.f_hist,
        // console.warn(this.data);
    
        // var url = 'https://ivyhacks-nice-fox-hu.mybluemix.net/80655ec-04f2-11eb-adc1-0242ac120002130911/biodata';
    
        // fetch(url, {
        //   method: "POST",
        //   body: JSON.stringify(this.data),
        //   headers: new Headers({
        //     "Content-Type": "application/json"
        //   })
        // })
        // .then(res => res.json())
    }

    render() {
        const { navigation } = this.props;
        let options = {
            fields: {
                weight: {
                    label: 'Weight (in lb)',
                    placeholder: '150',
                },
                height: {
                    label: 'Height (in cm)',
                    placeholder: '170',
                },
                t_hist: {
                    label: 'Treatment History',
                    placeholder: 'Paracetamol 650 taken',
                },
                f_hist: {
                    label: 'Family History',
                    placeholder: 'Fever in another family member',
                },
                covid: {
                    label: 'Covid Symptoms?',
                },
                cmpts: {
                    label: 'Complaints',
                    placeholder: 'Anosmia, Fever, Congestion',
                },
                blood: {
                    label: 'Blood Group',
                    placeholder: 'O, AB...',
                },
                adm: {
                    label: 'Admission Time',
                    placeholder: '04/10/20',
                },
                exm: {
                    label: 'Examination Time',
                    placeholder: '04/10/20',
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
            race: t.enums({
                I: 'American Indian or Alaska Native', 
                A: 'Asian', B: 'Black or African American', 
                H: 'Hispanic or Latino', 
                W: 'White', 
                N: 'Native Hawaiian or Other Pacific Islander'}, 
                'race'),
            address: t.String,
            adm: t.String,
            exm: t.String,
            // cmpts: t.String,
            // t_hist: t.String,
            // f_hist: t.String,
            // covid: t.Boolean
        });
        return (
            <ScrollView>
                <Text style={styles.heading}>Patient Data</Text>
                <View style={styles.contentContainer}>
                    <Form
                        // ref = 'PatientForm'
                        ref={this.formRef}
                        type = { PatientModel }
                        options = { options }
                        data = { this.state.data }
                        style = { styles.form }
                        // onChange = { this.onChange }
                    />
                    <TouchableOpacity style={styles.btn} onPress={this.submitForm}>
                        <Text style={styles.btnText}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <Button onPress={() => navigation.goBack()} title="Cancel" />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        padding: 80,
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 80,
        marginBottom: -40,
        fontWeight: 'bold', 
    },
    container: {
      backgroundColor: '#F5F5CF',
      flex: 1,
      justifyContent: 'center',
    },
    btn: {
      backgroundColor: 'skyblue',
      height: 40,
      color: "#ffffff",
      justifyContent: "center",
      alignItems: "center"
    }
  });


  export default function() {
    const navigation = useNavigation();

    // return <PatientForm {...props} navigation={navigation} />;
    return <PatientForm navigation={navigation} />;
  }