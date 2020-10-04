import React from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Component } from 'react';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

class FormScreen extends Component {
  constructor()
  {
    super();
    this.state = {
      name:'',
      age: '',
      sex:'',
      height:'',
      weight:'',
      blood:'', 
      race:'', 
      address:'', 
      adm: '', 
      exm: '', 
      cmpts: '', 
      t_hist: '', 
      f_hist: '', 
    }
  }

  updateValue(text, field) {
    if (field == "name") {
      this.setState({
        name: text
      })
    } else if (field == "age") {
      this.setState({
        age: text
      })
    } else if (field == "sex") {
      this.setState({
        sex: text
      })
    } else if (field == "height") {
      this.setState({
        height: text
      })
    } else if (field == "weight") {
      this.setState({
        weight: text
      })
    } else if (field == "blood") {
      this.setState({
        blood: text
      })
    } else if (field == "race") {
      this.setState({
        race: text
      })
    } else if (field == "address") {
      this.setState({
        address: text
      })
    } else if (field == "adm") {
      this.setState({
        adm: text
      })
    } else if (field == "cmpts") {
      this.setState({
        cmpts: text
      })
    } else if (field == "t_hist") {
      this.setState({
        t_hist: text
      })
    } else {
      this.setState({
        f_hist: text
      })
    }
  }

  submit() {
    let info = {}
    info.name = this.state.name,
    info.age = this.state.age,
    info.sex = this.state.sex,
    info.height = this.state.height,
    info.weight = this.state.weight,
    info.blood = this.state.blood,
    info.race = this.state.race,
    info.address = this.state.address,
    info.adm = this.state.adm,
    info.exm = this.state.exm,
    info.cmpts = this.state.cmpts,
    info.t_hist = this.state.t_hist,
    info.f_hist = this.state.f_hist,
    console.warn(info);

    var url = 'https://ivyhacks-nice-fox-hu.mybluemix.net/80655ec-04f2-11eb-adc1-0242ac120002130911/biodata';

    fetch(url, {
      method: "POST",
      body: JSON.stringify(info),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(res => res.json())
  }

  render () {
    const { navigation } = this.props;
    return (
      <View style={styles.main}>
        <Text style={styles.heading}>Biodata Details</Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "name")}
        />
        <TextInput
          placeholder="Age"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "age")}
        />
        <TextInput
          placeholder="Sex"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "sex")}
        />
        <TextInput
          placeholder="Blood group"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "blood")}
        />
        <TextInput
          placeholder="Height"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "height")}
        />
        <TextInput
          placeholder="Weight"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "weight")}
        />
        <TextInput
          placeholder="Race"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "race")}
        />
        <TextInput
          placeholder="Address"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "address")}
        />
        <TextInput
          placeholder="Admission Time"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "adm")}
        />
        <TextInput
          placeholder="Examination Time"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "exm")}
        />
        <TextInput
          placeholder="Complaints"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "cmpts")}
        />
        <TextInput
          placeholder="Treatment History"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "t_hist")}
        />
        <TextInput
          placeholder="Family History"
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, "f_hist")}
        />
        <TouchableOpacity style={styles.btn} onPress={() => this.submit()}>
          <Text>Save</Text>
        </TouchableOpacity>
        <Button onPress={() => navigation.goBack()} title="Cancel" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    fontFamily: "helvetica"
  },
  input: {
    padding: 10,
    borderWidth: 2,
  }
});

export default function(props) {
  const navigation = useNavigation();

  return <FormScreen {...props} navigation={navigation} />;
}