import axios from '../axios/index'

export const sampleApi = {
    getEmpList
};

function getEmpList() {
    return axios.get('/employees');
}
