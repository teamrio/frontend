import React from 'react';
import { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, FlatList, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import PulseGraph from './pulseutils/pulsegraph'

export default function Pulse({ data }) {
    return (
        <View style={styles.main}>
            <Text style={styles.heading}>Plethysmograph</Text>
            <Text style={styles.lastUpdated}>04 Oct - present</Text>
            <View style={styles.setting}>
                <Text style={styles.btn}>Current</Text>
                <Text style={styles.btn}>Last Week</Text>
                <Text style={styles.btn}>Last Month</Text>
            </View>
            <View>
                <PulseGraph />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        // backgroundColor: 'skyblue',
        padding: 20,
        marginBottom: 5
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    lastUpdated: {
        fontSize: 10,
        paddingBottom: 10
    },
    setting: {
        flexDirection: 'row',
    },
    btn: {
        margin: 3,
        borderRadius: 20,
        borderColor: 'turquoise',
        borderWidth: 2,
        padding: 10,
        color: 'turquoise',
        backgroundColor: 'white',
    }
  });