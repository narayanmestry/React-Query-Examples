import api from "./api";

export const getUsers = async () =>{
    const response =  await api.get('/users');
    return response?.data;
}

export const getUserByID = (userId:string) => api.get(`/users/${userId}`);

// export const addUser = () => api.post()