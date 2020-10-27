

import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Text,
    Animated,
    StyleSheet,
    TouchableOpacity as TO,
    ActivityIndicator,
    ScrollView,

} from 'react-native';
import Body from '../../components/Body';
// import { useDarkMode } from 'react-native-dynamic'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDataList } from './_home_service'
import BrowseResult from './component/BrowseResult'
const url = 'http://157.245.35.90/';
function Home({ navigation }) {
    const [data, setData] = useState([{ title: 'سلام ', image: 'nasdas' }])
    const [isLoading, setLoading] = useState(true)
    const [isFocus, setFocus] = useState(true)
    // const [isDarkMode,setDarkMode] = useDarkMode()
    // const isDarkMode = useDarkMode()
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataList().then((res) => {
                console.log('data', res.data.Venue)
                setData(res.data.Venue)
            })
            setFocus(true)
        })
        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setFocus(false)
        })
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
        <Body style={{ flex: 1, borderWidth: 1}}>
                {
                    isFocus ? <ScrollView>

                        {
                            data.map((i, j) => {
                                return <BrowseResult title={i.title} picture={url + i.image} navigation={navigation} />
                            })
                        }
                    </ScrollView> :

                        <ActivityIndicator color={'#fff'} size={'small'} style={{ opacity: isLoading ? 1 : 0 }} />}
           
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
)(Home);


const s = StyleSheet.create({
                TblRow: {
                flexDirection: 'row',
        margin: 10
    },
    TblChilds: {

            }
})
