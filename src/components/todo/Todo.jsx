import { useDispatch, useSelector } from "react-redux";
import './Todo.css'

const Todo = ({ id, text }) => {
    const isEdidting = useSelector(state => state.isEditing)
    const inputValue = useSelector(state => state.newValue)
    const dispatch = useDispatch()

    const handleEdit = (id, text) => {

        dispatch({ type: 'EDITING', payload: id })
        dispatch({ type: 'SET_NEW_VALUE', payload: text })
    }

    const handleUpdateTodo = (id, text) => {
        dispatch({ type: 'UPDATE_TODO', payload: { id: id, text: text } })
        dispatch({ type: 'EDITING', payload: false })
    }

    const removeHandler = id => {
        dispatch({ type: 'REMOVE_TODO', payload: id })
    }
    return (
        <>
            {isEdidting === id ? (
                <div className="update-container">
                    <input type="text" className="input-update" value={inputValue} onChange={e => { dispatch({ type: 'SET_NEW_VALUE', payload: e.target.value }) }} />
                    <button className="updatetodo-btn" onClick={() => { handleUpdateTodo(id, inputValue) }}>Update todo</button>
                </div>
            ) : (<div className="todo-item">
                <p>{text}</p>
                <div className="todo-btns">
                    <button className="btn-edit" onClick={() => { handleEdit(id, text) }}>Edit</button>
                    <button className="btn-delete" onClick={() => { removeHandler(id) }}>Delete</button>
                </div>
            </div>)}
        </>
    );
}

export default Todo;