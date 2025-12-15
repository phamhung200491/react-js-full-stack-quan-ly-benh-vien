import axios from '../axios';

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword })
}

const getAllUsers = (inputId) => {
    //template string
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
    console.log(`check data from service : `, data)
    return axios.post(`/api/create-new-user`, data)
}

const editUserService = (inputData) => {
    console.log('inputData service ', inputData)
    return axios.put(`/api/edit-user`, inputData)
}

const deleteUserService = (inputData) => {
    return axios.delete(`/api/delete-user`, { data: { id: inputData } })
}

const getAllCodeService = (inputData) => {
    return axios.get(`/api/allcode?type=${inputData}`)
}

export {
    handleLoginApi, getAllUsers,
    createNewUserService, deleteUserService,
    editUserService, getAllCodeService
};