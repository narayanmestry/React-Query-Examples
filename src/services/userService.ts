import api from "./api";

//  get all users
export const getUsers = async () =>{
    const response =  await api.get('/users');
    return response?.data;
}

// get user by id
export const getUserByID = async (userId:string) => {
    const response = await api.get(`/users/${userId}`);    
    return response?.data;
};

// add user
export const addUser = async (userData: any) => {
    return await api.post('/users', userData).then((res)=>res.data)                  
}

// update user
export const updateUser = async ( newUserData: any) => {
    return await api.put(`/users/${newUserData?.id}`, newUserData).then((res) => res.data);
};

// delete user
export const deleteUser = async (userId: string) => {
    return await api.delete(`/users/${userId}`).then((res) => res.data);
}