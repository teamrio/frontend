// import React, { useState } from 'react';
// import { Component } from 'react';
// import { StyleSheet, Button, View, Text } from 'react-native';
// import 'react-native-gesture-handler';

// export default class VitalSignsPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentDate: '';
//         }
//     }

//     getDate() {
//         var date = new Date().getDate();
//         var month = new Date().getMonth() + 1;
//         var year = new Date().getFullYear(); 
//         var currentDate = date + '/' + month + '/' + year;
//         setCurrentDate(currentDate);
//     }

//     render() {
//         return (
//             <View>
//                 <Text>Vital Signs</Text>
//                 <Text>{ currentDate }</Text>
//             </View>
//         );
//     }
// }