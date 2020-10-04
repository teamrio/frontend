import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import { LineChart } from 'react-native-chart-kit';

export default function PulseGraph({ raw }) {
    const scrnWidth = Dimensions.get("window").width;

    const data = {
        // label: "Time (in ms)",
        datasets: [
            {
                data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                ],
                // data: { raw },
                // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 3
            }
        ],
        // legend: []
    };

    return (
      <View>
          <LineChart
            data = { data }
            width = { 350 }
            height = { 90 }
            // yAxisLabel = 'BPM'
            xAxisLabel = 'Time (in ms)'
            chartConfig = {{
                backgroundColor: "#ffffff",
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(45, 45, 45, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(45, 45, 45, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "1",
                  strokeWidth: "2",
                  stroke: "#454545"
                }
              }}
            bezier
          />
      </View>
    );
  }

  