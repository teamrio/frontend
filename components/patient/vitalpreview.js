import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, ScrollView, Button, Text, View } from 'react-native';
import 'react-native-gesture-handler';
// import VitalSignsPage from './components/vitalsignspage';

import PreviewCard from './vitalutils/previewcard';

export default function VitalPreview({ data, navigation }) {
    return (
        <View style={styles.main}>
            <View style={styles.nav}>
                <Text style={styles.heading}>Vital Preview</Text>
                <Text
                    style={styles.viewall} 
                    onPress={() => navigation.navigate('Vital Signs')}
                >
                    View all
                </Text>
                {/* <Button style={styles.viewall}
                    onPress={() => navigation.navigate('Vital Signs')}
                    title="View all"
                /> */}
            </View>
            <ScrollView horizontal={true} style={styles.content}>
                <PreviewCard />
                <PreviewCard />
                <PreviewCard />
                <PreviewCard />
                <PreviewCard />
                <PreviewCard />
                <PreviewCard />
                <PreviewCard />

                {/* <Text>Weight</Text>
                <Text>Height</Text>
                <Text>BMI</Text>
                <Text>Respirator Rate</Text>
                <Text>Heart Rate</Text>
                <Text>Blood Pressure</Text>
                <Text>Oxygen Saturation</Text>
                <Text>Temperature</Text> */}
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