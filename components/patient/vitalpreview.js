import React from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, View } from 'react-native';
import 'react-native-gesture-handler';

export default function VitalPreview({ data }) {
    return (
        <View style={styles.main}>
            <View style={styles.nav}>
                <Text>Vital Preview</Text>
                <Text>View all</Text>
            </View>
            <View style={styles.content}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    // heading: {
    //     fontSize: 25,
    //     fontWeight: 'bold',
    // },
    // id: {
    //     fontSize: 10,
    //     paddingBottom: 10
    // },
    // body: {
    //     fontSize: 20,
    //     fontWeight: "bold"
    // }
  });