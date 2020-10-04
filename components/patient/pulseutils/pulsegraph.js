// import React from 'react';
// import { StyleSheet, View, Dimensions } from 'react-native';
// import 'react-native-gesture-handler';
// import { LineChart } from 'react-native-chart-kit';
// // import firebase from 'firebase';

// export default function HeartbeatGraph({ raw }) {
//     // var config = {
//     //     databaseURL: '',
//     //     projectId: '',
//     // };

//     // if (!firebase.apps.length) {
//     //     firebase.initializeApp(config);
//     // }

//     // readUserData() {
//     //     firebase.database().ref('').on('', function (snapshot) {
//     //         console.log(snapshot.val())
//     //     });
//     // }


//     const scrnWidth = Dimensions.get("window").width;
//     const data = {
//         label: "Time (in ms)",
//         datasets: [
//             {
//                 data: { raw },
//                 color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
//                 strokeWidth: 2
//             }
//         ],
//         // legend: []
//     };

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <LineChart
//             data = { data }
//             width = { scrnWidth }
//             height = { 220 }
//             chartConfig = {{
//                 backgroundColor: "#e26a00",
//                 backgroundGradientFrom: "#fb8c00",
//                 backgroundGradientTo: "#ffa726",
//                 decimalPlaces: 2, // optional, defaults to 2dp
//                 color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//                 labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//                 style: {
//                   borderRadius: 16
//                 },
//                 propsForDots: {
//                   r: "1",
//                   strokeWidth: "2",
//                   stroke: "#ffa726"
//                 }
//               }}
//           />
//             {/* <ChartView style={{height:300}} config={conf} options={options}></ChartView> */}
//       </View>
//     );
//   }