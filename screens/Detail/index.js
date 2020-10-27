

import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Text,
    Animated,
    StyleSheet,
    TouchableOpacity as TO,

} from 'react-native';
import Body from '../../components/Body';

import { useFocusEffect } from '@react-navigation/native';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


function Detail({ navigation }) {

    const [isFocus, setFocus] = useState(false)
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setFocus(true)
        });
        return unsubscribe;
    }, [navigation]);
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setFocus(false)
        });
        return unsubscribe;
    }, [navigation]);





    // useFocusEffect(
    //     React.useCallback(() => {
    //         const unsubscribe = NetInfo.addEventListener(state => {

    //             return () => unsubscribe();
    //         }, []),
    //     })
    // )



    return (
        <Body style={{ flex: 1 }}>
            <Text>salam</Text>
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
