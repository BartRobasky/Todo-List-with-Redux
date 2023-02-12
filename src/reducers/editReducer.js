


const editReducer = (state = false, action) => {
    switch (action.type) {
        case 'EDITING':
            return state = action.payload;
        default:
            return state
    }
}

export default editReducer