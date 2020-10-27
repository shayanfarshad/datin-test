import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';



export default function Body({ children, style }) {
    return (

        <SafeAreaView style={[style, { flex: 1 }]}>
            <ScrollView>
                {children}</ScrollView>
        </SafeAreaView>

    )
}