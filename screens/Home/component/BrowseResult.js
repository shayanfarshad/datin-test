
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, Animated, StyleSheet, Image,useColorScheme,TouchableOpacity as TO } from 'react-native';
import Label from '../../../components/typo'
import { useTheme } from '@react-navigation/native';


export default function BrowseResult({navigation, title, picture, hasBorder }) {
    const { colors } = useTheme();

    function goDetail(){
        navigation.navigate('detail',{
            title:title,
            img:picture
        })
    }

    return (
        <TO onPress={()=>goDetail()} style={[s.TblRow, , hasBorder ? { borderBottomColor: '#fff', borderBottomWidth: 1, paddingBottom: 10 } : {}]}>
            <Text style={{color:colors.text}}>{title}</Text>
            <Image source={{ uri: picture }} style={{width:100 , height:100 , borderRadius:10}} />
        </TO>

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