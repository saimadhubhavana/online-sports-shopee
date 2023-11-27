import 'bootstrap/dist/css/bootstrap.min.css';

const userReducerDefaultState = [];

const userReducer =  (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                action.user
            ];

        case 'UPDATE_USER':
            return [
                ...state,
                action.user
            ]

        default:
            return state;
    }
}
export default userReducer;