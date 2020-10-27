import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import AppAlert from './index'

const base = 'http://157.245.35.90/api';



export function ajax(sys, url, Method, isbody, body,device,uuid) {
    let localUrl = base + url;
    // AsyncStorage.getItem('token').then((token)=>{
    //     console.log(token)
    // })
    switch (sys) {
        case 'tokenFormData':
            return AsyncStorage.getItem('token').then((token)=>{
                axios.defaults.headers.common['Authorization'] = 'Bearer ' +  token;
                return axios({
                    method: Method,
                    url: localUrl,
                    data: isbody ? body : null,
                    headers: { 'Content-Type': 'multipart/form-data', 'Authorization': 'Bearer ' + token}
                });
            })
            
            
        case 'tokenJson':
            return (
                AsyncStorage.getItem('token').then((token)=>{
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' +  token;
                    return axios({
                        url:localUrl,
                        method:Method,
                        data:  isbody ? JSON.stringify(body) : null,
                        headers: {
                           Accept: 'application/json',
                           'Content-Type': 'application/json',
                           'Authorization': 'Bearer ' + token
                        }
                   })
                })
                 
            );

        case 'TokenUrl':
            return(
                AsyncStorage.getItem('token').then((token)=>{
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' +  token;
                    return axios({
                        url: localUrl + body,
                        method:Method,
                        data:  isbody ? JSON.stringify(body) : null,
                        headers: {
                           Accept: 'application/json',
                           'Content-Type': 'application/json',
                           'Authorization': 'Bearer ' + token
                        }
                   })
                })
            )
            
        case 'Url':
            function checkbody(localUrl,body){
                if(typeof(body) === 'undefined'){
                    return localUrl
                }else{
                    return localUrl + body
                }
            }
            return AsyncStorage.getItem('token').then((token)=>{
                axios.defaults.headers.common['Authorization'] = 'Bearer ' +  token;
                return axios({
                    url:        checkbody(localUrl,body),
                    method:     Method,
                    headers: {
                      Accept:           'application/json',
                      'Content-Type':   'application/json',
                      'Authorization': 'Bearer ' + token
                    }
                  });
            })
            
        case 'FormData':
            return AsyncStorage.getItem('userToken').then((token)=>{
                return axios({
                    method: Method,
                    url: localUrl,
                    data: isbody ? body : null,
                    headers: { 'Content-Type': 'multipart/form-data' ,'Authorization': 'Bearer ' + token}
                });
            })
            
        default:
            return (
                axios({
                    url: localUrl ,
                    method: Method,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'uuid':uuid,
                        'DeviceType':device
                    },
                    data: isbody ? JSON.stringify(body) : null
                })
            )
            
    }
}