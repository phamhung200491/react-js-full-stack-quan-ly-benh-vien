import axios from '../axios';

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword })
}

const getAllUsers = (inputId) => {
    //template string
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
    return axios.post(`/api/create-new-user`, data)
}

const editUserService = (inputData) => {
    return axios.put(`/api/edit-user`, inputData)
}

const deleteUserService = (inputData) => {
    return axios.delete(`/api/delete-user`, { data: { id: inputData } })
}

const getAllCodeService = (inputData) => {
    return axios.get(`/api/allcode?type=${inputData}`)
}

const getTopDoctorHomeService = (limit) => {
    return axios.get(`api/top-doctor-home?limit=${limit}`)
}

const getAllDoctors = () => {
    return axios.get(`api/get-all-doctors`)
}

const saveDetailDoctorService = (data) => {
    return axios.post('/api/save-info-doctor', data)
}

const getDetailDoctor = (inputId) => {
    return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`)
}

export {
    handleLoginApi, getAllUsers,
    createNewUserService, deleteUserService,
    editUserService, getAllCodeService,
    getTopDoctorHomeService, getAllDoctors,
    saveDetailDoctorService, getDetailDoctor,
};