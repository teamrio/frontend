import React from 'react';
import { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, FlatList, Text, View } from 'react-native';
import 'react-native-gesture-handler';

export default function Pulse({ data }) {
    return (
        <View>
            <Text>Pulse Measure</Text>
            <Text>Last Updated</Text>
            <ScrollView>
                <Text>Current</Text>
                <Text>Last Week</Text>
                <Text>Last Month</Text>
            </ScrollView>
            <View>
                <Text>Graph</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

  });