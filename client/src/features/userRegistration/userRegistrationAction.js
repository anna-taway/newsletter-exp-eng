import axios from "axios";
import {
    registrationPending,
    registrationSuccess,
    registrationError,
} from './userRegistrationSlice';

const rootUrl = "http://localhost:8000";
const loginUrl = rootUrl + "/login";

export const userLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
    try {
        const res = await axios.post(loginUrl, frmData);
        resolve(res);
    } catch (error) {
        reject(error);
    }
    });
};

export const newUserRegistration = (frmDt) => async (dispatch) => {
    try {
        dispatch(registrationPending());

        const result = await userLogin(frmDt);
        const { data } = result;
        const { success, status } = data;
        (success && status === 'success')
        ? dispatch(registrationSuccess(data))
        : dispatch(registrationError(data));

    } catch (error) {
        dispatch(registrationError(error.message));
    }
};
