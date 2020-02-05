const initialState = {
    isLoggedIn: false,
    currentUser: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.payload.currentUser,
            };
        case 'LOGOUT':
            return initialState;
        case 'UPDATE_USER':
            return {
                ...state,
                currentUser: action.payload.currentUser
            };
        default:
            return state;
    }
}
