const initialState = {
    userName:'',
    posts: [],
    comments: [],
};

export default function homepage(state = initialState, action) {
    switch(action.type) {
        case 'GRAB_COMMENTS':
            return {
                ...state,
                comments: action.payload,
            };
        /*case 'ADD_COMMENTS':
            return {
                ...state,
                comments: action.payload,
            };
        case 'DELETE_COMMENTS':
            return {
                ...state,
                comments: action.payload,
            };*/
        case 'GRAB_POSTS':
            return {
                ...state,
                posts: action.payload,
            };
        default:
            return state;
    }
}