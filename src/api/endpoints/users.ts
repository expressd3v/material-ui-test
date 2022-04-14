import {api} from "../index";

const getUsersApi = async () =>
    api.get('/data.json')

export {getUsersApi}