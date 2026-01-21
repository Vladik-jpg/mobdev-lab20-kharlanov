import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <div className="empty-state">Нет задач. Добавьте новую!</div>;
  }

  return (
    <ul className="todo-list">
      {/* TODO: Используйте метод map для отображения всех задач */}
      {/* Для каждой задачи (todo) из массива todos создайте компонент TodoItem */}
      {/* Передайте в TodoItem следующие props: key, todo, onToggle, onDelete */}
    </ul>
  );
}

export default TodoList;