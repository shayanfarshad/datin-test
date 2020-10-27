import axios from 'axios';
import {ajax} from '../../utils/ajax';

export const getDataList = () =>{
    return ajax(null,'/v1/venues','GET',false)
}