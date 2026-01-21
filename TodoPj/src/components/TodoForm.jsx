import { useState } from 'react';

function TodoForm({ onAdd }) {
    const[inputValue, setInputValue] = useState("")
  // TODO: Создайте стейт для хранения текста из поля ввода (inputValue)
  // Начальное значение - пустая строка

  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    
    // TODO: Добавьте проверку - если inputValue пустой (или только пробелы), ничего не делаем
    // Используйте метод trim() для удаления пробелов с краёв строки
    
    // TODO: Вызовите функцию onAdd с текстом задачи
    
    // TODO: Очистите поле ввода после добавления задачи
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Введите новую задачу..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="btn btn-add">
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;