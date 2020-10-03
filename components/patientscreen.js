import React from 'react';
import { Component } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import RNEventSource from '../utils/rneventsource';

export default class PatientScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            isLoading: true
        };
    }

    componentDidMount() {    
        this.eventSource = new RNEventSource('https://ivyhacks-nice-fox-hu.mybluemix.net/80655ec-04f2-11eb-adc1-0242ac120002130911/stream')
        this.eventSource.addEventListener('message', (data) => {
            console.warn(data);
        });

        fetch('https://ivyhacks-nice-fox-hu.mybluemix.net/80655ec-04f2-11eb-adc1-0242ac120002130911/biodata')
            .then((response) => response.json())
            .then((json) => {
                console.warn(json); // COMMENT OUT LATER
                this.setState({ data: json}); 
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });        
    }

    render() {
        const { data, isLoading } = this.state;

        return (
            <View style={styles.main}>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data = {data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                          <Text>{item.name}, {item.age}, {item.sex}, {item.blood}, {item.weight}, {item.height}, {item.race}, {item.address}, {item.admission}, {item.examination}</Text>
                            // <Text>{item}</Text>
                        )}
                    />
                )}
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
    }
  });