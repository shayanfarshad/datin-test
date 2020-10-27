

import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Text,
    Animated,
    StyleSheet,
    TouchableOpacity as TO,
    Image,
    Dimensions
} from 'react-native';
import Body from '../../components/Body';

import { useFocusEffect, useTheme } from '@react-navigation/native';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


function Detail({ navigation, route }) {

    const [isFocus, setFocus] = useState(false)
    // const [title , setTitle] = useState(navigation.)
    // const [img , setImg] = useState()
    const { title, img } = route.params;
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setFocus(true)
            console.log('title', title)
        });
        return unsubscribe;
    }, [navigation]);
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setFocus(false)
        });
        return unsubscribe;
    }, [navigation]);


    const width = Dimensions.get('window').width;
    const { colors } = useTheme();

    // useFocusEffect(
    //     React.useCallback(() => {
    //         const unsubscribe = NetInfo.addEventListener(state => {

    //             return () => unsubscribe();
    //         }, []),
    //     })
    // )



    return (
        <Body style={{ flex: 1, padding: '5%' }}>
            <Text style={{ marginBottom: 20, color: colors.text }}>{title}</Text>
            <View style={{width:0.9*width}}>
                <Image source={{ uri: img }} resizeMode="contain" style={{ width: '100%',height:400, borderRadius: 10 }} />
            </View>
        </Body>
    );
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {},
        dispatch,
    );
};

const mapStateToProps = state => {
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Detail);

const styles = StyleSheet.create({});
