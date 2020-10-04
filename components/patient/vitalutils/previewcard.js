import React from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, FlatList, Text, View } from 'react-native';
import 'react-native-gesture-handler';

export default function PreviewCard({ data }) {
    return (
        <View style={styles.card}>
            <Text>Icon</Text>
            <Text>Data</Text>
            <Text>Last Updated</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'beige',
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