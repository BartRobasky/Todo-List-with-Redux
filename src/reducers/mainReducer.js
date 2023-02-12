


const mainReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                id: Math.floor(Math.random() * 10000),
                text: action.payload
            }
            const newTodos = [...state, newTodo]
            return state = newTodos
        case 'REMOVE_TODO':
            const removeArr = state.filter(todo => todo.id !== action.payload)
            return state = removeArr;
        case 'UPDATE_TODO':
            let updatedTodo = state.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text
                }
                return todo
            });
            return state = updatedTodo
        default:
            return state
    }
}

export default mainReducer