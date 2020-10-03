import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import t from 'tcomb-form-native';

export default function App() {
  // const [isLoading, setLoading] = useState(true);
  // const [name, setName] = useState("");

  var base_url = "https://ivyhacks-nice-fox-hu.mybluemix.net/";
  var patient_id = "80655ec-04f2-11eb-adc1-0242ac120002221250/";

  var temp_url = base_url + patient_id + "temperature";
  var pulse_url = base_url + patient_id + "pulse"
  var name_url = base_url + patient_id + "name"
  var age_url = base_url + patient_id + "age"
  var sex_url = base_url + patient_id + "sex"
  var weight_url = base_url + patient_id + "weight";
  var height_url = base_url + patient_id + "height";
  var race_url = base_url + patient_id + "race";
  var address_url = base_url + patient_id + "address";
  var admission_url = base_url + patient_id + "admission";
  var examination_url = base_url + patient_id + "examination";
  var complaints_url = base_url + patient_id + "complaints";
  var treatment_history_url = base_url + patient_id + "treatment_history";
  var family_history_url = base_url + patient_id + "family_history";

  // useEffect(() => {
  //   fetch(name_url)
  //     .then((response) => response,json())
  //     // .then((json) => setName(json.))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // });

  var Form = t.form.Form;

  var Patient = t.struct({
    name: t.String,
    sex: t.String,
    height: t.Number,
    weight: t.Number
  });

  return (
    <View style={styles.container}>
      {/* <Text>Hello World</Text>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          name = {name}
        />
      )} */}
      <Form type={Patient}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
