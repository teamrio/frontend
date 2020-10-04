import React from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, FlatList, Text, View } from 'react-native';
import 'react-native-gesture-handler';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';

export default function PreviewCard({ data }) {
    return (
        <View style={styles.card}>
            {/* <Ionicons name="person-circle" size={32} color="green"/> */}
            <Text>Icon</Text>
            <Text>Data</Text>
            <Text>Last Updated</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'skyblue',
        flexDirection: 'column',
        marginRight: 10,
        padding: 15,
        height: 120,
        width: 120,
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
    }
  });