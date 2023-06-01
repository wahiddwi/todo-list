import './Todo.css';
import TodoList from '../todo-list/TodoList';

const Todo = () => {
    const todos = [
        {id: 1, title: 'Eat'},
        {id: 2, title: 'Sleep'},
        {id: 3, title: 'Code'},
    ];
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todos={todos} />
        </div>
    );
}

export default Todo;