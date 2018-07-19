export default function (state = null, action) {
    switch (action.type) {
        case 'SELECT_CLIENT':
            return action.payload;
        default:
            return state;
    }
    
}