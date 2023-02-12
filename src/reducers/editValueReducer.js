const editValueReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_NEW_VALUE':
            return state = action.payload;
        default:
            return state
    }
}

export default editValueReducer