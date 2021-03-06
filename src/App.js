import './App.css';
import TodoItem from './componenets/TodoItem';
import todosData from './tododata';

function App() {
  const todos = todosData.map((todo) => (
    <TodoItem key={todo.id} todo={{ text: todo.text, completed: todo.completed }} />
  ));
  return (
    <div className="todo-list">
      <h3>Todo List</h3>
      {todos}
    </div>
  );
}

export default App;
