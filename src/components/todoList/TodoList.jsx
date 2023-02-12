import { useSelector } from "react-redux";
import Todo from "../todo/Todo";
import TodoForm from "../todoForm/TodoForm";
import './TodoList.css'

const TodoList = () => {
    const todos = useSelector(state => state.todos)

    return (
        <div className="todolist-section">
            <h1>Todo App - Redux </h1>
            <TodoForm />
            <h2>Your tasks</h2>
            {todos.map(todo => (
                <Todo key={todo.id} id={todo.id} text={todo.text} />
            ))}
        </div>
    );
}

export default TodoList;