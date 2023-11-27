import axios from "../../axios/axios";


const _addUser = (user) => ({
    type: 'ADD_USER',
    user
});

export const addUser = (userData = {
   
    username: '',
    password: '',
    role:'',
    
}) => {
    return (dispatch) => {
        const user = {
            username: userData.username,
            password: userData.password,
            role:userData.role
        };
        console.log(user);
        return axios.post('/adduser', user).then(() => {
            dispatch(_addUser(user));
        }).catch(error => {
            throw (error);
        });
    };
};


const _updateUser = (updatedUser) => ({
    type:"UPDATE_USER",
    updatedUser
});


export const updateUser = (updatedUser) => {
    return (dispatch) => {
        const user = {
                userId:updatedUser.userId,
                username:updatedUser.username,
                password:updatedUser.password,
                role:updatedUser.role
        };
        console.log(user);
        return axios.put(`/updateuser`,user).then(() => {
            dispatch(_updateUser(user));
        }).catch(error => {
            throw (error);
        });
    }
};