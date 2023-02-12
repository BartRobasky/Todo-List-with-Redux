

const formReducer = (state = '', action) => {
    switch (action.type) {
        case 'UPDATED_INPUT':
            return state = action.payload;

        default:
            return state;
    }
}
export default formReducer;