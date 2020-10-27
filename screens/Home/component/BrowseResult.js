
import React from 'react';
import { View, Text, Animated, StyleSheet, Image } from 'react-native';
import Label from '../../../components/typo'

export default function BrowseResult({ title, picture, hasBorder }) {
    return (
        <View style={[s.TblRow, , hasBorder ? { borderBottomColor: '#fff', borderBottomWidth: 1, paddingBottom: 10 } : {}]}>
            <Text>{title}</Text>
            <Image source={{ uri: picture }} style={{width:100 , height:100 , borderRadius:10}} />
        </View>

        // <View style={[s.TblRow, , hasBorder ? { borderBottomColor: '#fff', borderBottomWidth: 1, paddingBottom: 10 } : {}]}>
        //     <View style={[s.TblChilds, { flex: 0.3 }]}>
        //         <Label style={{ color: '#fff', textAlign: hasBorder ? 'left' : 'center' }}>{title}</Label>
        //     </View>
        //     <View style={[s.TblChilds, { flex: 0.7 }]}>
        //         <Label style={{ color: '#fff', textAlign: 'center' }}>{picture}</Label>
        //     </View>
        // </View>
    )
}

const s = StyleSheet.create({
    TblRow: {
        flexDirection: 'row',
        justifyContent:'space-between',
        margin: 10
    },
    TblChilds: {

    }
})