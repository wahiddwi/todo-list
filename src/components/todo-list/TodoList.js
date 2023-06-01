import './TodoList.css';

const TodoList = (props) => {
    console.log(props.todos);
    return (
        <ul>{
            // menampilkan data arraynya dengan menggunakan map
            props.todos.map((todo) => {
                // menampilkan datanya
                return <li key={todo.id}>{todo.title}</li>
            })
        }</ul>
    );
}

export default TodoList;