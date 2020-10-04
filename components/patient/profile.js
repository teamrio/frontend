import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

export default function Profile({ data }) {
    return (
        <View style={styles.main}>
            <View style={styles.profile}>
                <Text>Picture</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.heading}>Kamlesh Prajapati</Text>
                <Text style={styles.id}>#24662664643256</Text>
                <Text style={styles.body}>24 Year | Male</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        padding: 20,
        marginBottom: 10
    },
    profile: {
        flex: 2
    },
    content: {
        flex: 4
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    id: {
        fontSize: 10,
        paddingBottom: 10
    },
    body: {
        fontSize: 20,
        fontWeight: "bold"
    }
  });