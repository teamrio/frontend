import React from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, FlatList, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import PreviewCard from './vitalutils/previewcard';

export default function VitalPreview({ data }) {
    return (
        <View style={styles.main}>
            <View style={styles.nav}>
                <Text style={styles.heading}>Vital Preview</Text>
                <Text style={styles.viewall}>View all</Text>
            </View>
            <ScrollView horizontal={true} style={styles.content}>
                <Text>Weight</Text>
                <Text>Height</Text>
                <Text>BMI</Text>
                <Text>Respirator Rate</Text>
                <Text>Heart Rate</Text>
                <Text>Blood Pressure</Text>
                <Text>Oxygen Saturation</Text>
                <Text>Temperature</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'skyblue',
        padding: 20,
        marginBottom: 10
    },
    nav: {
        flexDirection: 'row',
        paddingBottom: 10,
    },
    content: {
        // horizontal: true,
        // horizontal scroll
    },
    // main: {
    //     flexDirection: 'row',
    //     backgroundColor: 'purple',
    //     padding: 20,
    //     marginBottom: 10
    // },
    // profile: {
    //     flex: 2
    // },
    // content: {
    //     flex: 4
    // },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        flex: 4,
        // paddingLeft: 20,
    },
    viewall: {
        fontSize: 10,
        flex: 2,
        textAlign: 'right',
        // paddingRight: 20,
    },
    // body: {
    //     fontSize: 20,
    //     fontWeight: "bold"
    // }
  });