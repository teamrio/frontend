import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, ScrollView, Button, Text, View } from 'react-native';
import 'react-native-gesture-handler';
// import VitalSignsPage from './components/vitalsignspage';

import PreviewCard from './vitalutils/previewcard';

export default function VitalPreview({ data, navigation }) {
    // console.log(data);

    return (
        <View style={styles.main}>
            <View style={styles.nav}>
                <Text style={styles.heading}>Vital Signs</Text>
                <Text
                    style={styles.viewall} 
                    onPress={() => navigation.navigate('Vital Signs')}
                >
                    View all
                </Text>
            </View>
            <ScrollView horizontal={true} style={styles.content}>
                <PreviewCard icon='heartbeat' val='78' unit='bpm' date='04 Oct - 09:00'/>
                <PreviewCard icon='temperature-high' val='37'unit='c' date='04 Oct - 16.40'/>
                <PreviewCard icon='dot-circle' val='82' unit='mmHg' date='04 Oct - 08:40'/>
                <PreviewCard icon='compress' val='90/60' unit='mmHg' date='04 Oct - 08:50'/>
                <PreviewCard icon='weight' val='150' unit='lb' date='04 Oct - 08:40'/>
                <PreviewCard icon='tape' val='179' unit='cm' date='04 Oct - 09:00'/>
                <PreviewCard icon='wind' val='623' unit='L/min' date='04 Oct - 09:00'/>
                <PreviewCard icon='arrow-alt-circle-down' val='24.9' unit='' date='04 Oct - 16:00'/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        // backgroundColor: 'skyblue',
        padding: 20,
        marginBottom: 5
    },
    nav: {
        flexDirection: 'row',
        paddingBottom: 10,
    },
    content: {
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 4,
    },
    viewall: {
        fontSize: 10,
        flex: 2,
        textAlign: 'right',
    },
  });