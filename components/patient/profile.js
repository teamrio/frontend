import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import { useFonts, Josefin } from '@expo-google-fonts/josefin-sans';

export default function Profile(props) {
    // let [fontsloaded] = useFonts({
    //     Josefin,
    // });
    // const [data, setData] = useState(props);

    return (
        <View style={styles.main}>
            <View style={styles.profile}>
                <Ionicons name="md-person" size={80} color="turquoise" style={styles.personicon}/>
            </View>
            <View style={styles.content}>
                {/* <Text style={styles.heading}>{data.name}</Text> */}
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
        // backgroundColor: 'skyblue',
        padding: 20,
        marginBottom: 5,
        // fontFamily: 'Josefin',
    },
    profile: {
        flex: 2,
    },
    personicon: {
        marginLeft: 20,
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