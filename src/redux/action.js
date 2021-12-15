import axios from 'axios';
import USER from './constants';

const URL = 'http://localhost:4000';

export const requestUsers = (data) => async (dispatch) => {
    dispatch({
        type: USER.LOAD,
    });
    try {
        const dbData  = await axios.get(URL + '/api/users');
        dispatch({
            type: USER.LOAD_SUCCESS,
            usersData: dbData.data,
            isError: false,
        });
    } catch (e) {
        dispatch({
            type: USER.LOAD_SUCCESS,
            useraData: [],
            isError: true,
        });
    }
};



