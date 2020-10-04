import React from 'react';
import { Component } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import RNEventSource from '../utils/rneventsource';

import Profile from './patient/profile';
import VitalPreview from './patient/vitalpreview';
import Pulse from './patient/pulse';

export default class PatientScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            biodata: {},
            contdata: {},
            isLoading: true
        };
    }

    componentDidMount() {    
        this.eventSource = new RNEventSource('https://ivyhacks-nice-fox-hu.mybluemix.net/80655ec-04f2-11eb-adc1-0242ac120002130911/stream')
        this.eventSource.addEventListener('message', (data) => {
            this.setState({contdata: data})
            console.warn(contdata);
        });

        fetch('https://ivyhacks-nice-fox-hu.mybluemix.net/80655ec-04f2-11eb-adc1-0242ac120002130911/biodata')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ biodata: json}); 
                console.warn(biodata);
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });        
    }

    render() {
        const { biodata, contdata, isLoading } = this.state;

        return (
            <View style={styles.main}>
                <Profile data={this.biodata}/>
                <VitalPreview data={this.biodata} navigation={this.navigation}/>
                <Pulse data={this.contdata} />
                {/* <HeartbeatGraph raw={ data.pulse }/> */}
                {/* {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data = {data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                          <Text>{item.name}, {item.age}, {item.sex}, {item.blood}, {item.weight}, {item.height}, {item.race}, {item.address}, {item.admission}, {item.examination}</Text>
                            // <Text>{item}</Text>
                        )}
                    />
                )} */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#FFFFFF',
        fontFamily: ''
    }
  });