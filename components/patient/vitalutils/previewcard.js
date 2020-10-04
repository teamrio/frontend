import React from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, FlatList, Text, View } from 'react-native';
import 'react-native-gesture-handler';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function PreviewCard({ icon, unit, val, date }) {
    return (
        <View style={styles.card}>
            <FontAwesome5 name={icon} size={24} color='black'/>
            <View style={styles.measure}>
                <Text style={styles.val}>{val}</Text>
                <Text style={styles.unit}>{unit}</Text>
            </View>
            <Text style={styles.date}>{date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        flexDirection: 'column',
        marginRight: 10,
        padding: 15,
        height: 120,
        width: 120,
        borderColor: 'turquoise',
        borderWidth: 2,
        borderRadius: 20,
    },
    lastUpdate: {
        flex: 1,
    },
    dataContent: {
        flex: 2,
    },
    icon: {
        flex: 3,
    },
    measure: {
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'flex-start'
    },
    val: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    date: {
        marginTop: 10,
        fontSize: 10,
    },
    unit: {
        marginLeft: 5,
        fontSize: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
  });