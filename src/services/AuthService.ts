import axios from 'axios'

import {LoginModel, RegistrationModel} from "../shared/models";

const api = process.env.REACT_APP_API_URL + '/auth';

export const apiLogin = async (user: LoginModel) => {
    return await axios.post(api + '/login', user).then(res => res.data)
}

export const apiRegistration = async (user: RegistrationModel) => {
    return await axios.post(api + '/registration', user).then(res => res.data)
}