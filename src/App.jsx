
import './App.css';
import TodoList from './components/todoList/TodoList';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='todo-section'>

        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
