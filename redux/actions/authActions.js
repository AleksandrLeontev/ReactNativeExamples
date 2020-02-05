export const login = (currentUser) => {
    return {
        type: 'LOGIN',
        payload: {
            currentUser: currentUser
        }
    };
};


export const updateCurrentUser = (currentUser) => {
    return {
        type: 'UPDATE_USER',
        payload: {
            currentUser: currentUser
        }
    };
};


export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};


export const signup = (email, password) => {
    return (dispatch) => {
    };
};
