import { useDispatch, useSelector } from 'react-redux'
import './todoForm.css'


const TodoForm = () => {
    const inputValue = useSelector(state => state.formInput)
    const dispatch = useDispatch()
    const handleChangeInput = e => {
        dispatch({ type: 'UPDATED_INPUT', payload: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: 'ADD_TODO', payload: inputValue })
        dispatch({ type: 'UPDATED_INPUT', payload: '' })
    }
    return (
        <form className='formAdd-todo' onSubmit={handleSubmit}>
            <input type="text" placeholder="Write your task..." value={inputValue} onChange={handleChangeInput} />
            <button>Add Task</button>
        </form>
    );
}

export default TodoForm;