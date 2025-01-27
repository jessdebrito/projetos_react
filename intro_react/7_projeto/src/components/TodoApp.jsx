import React from "react";
import "./TodoApp.css";
import { useState } from "react";


// Mais atualizações: terminar o botão de delete, salvar no localStorage, carregar eles com useEffect

const TodoApp = () => {
  // Lista de tarefas
  const [todos, setTodos] = useState([]);

  // estado de texto da tarefa
  const [inputValue, setInputValue] = useState("");

  // adicionar tarefa
  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim() !== '') {
        const newTodo = {
            id:  Date.now(),
            text: inputValue
        }
        setTodos ((prevTodos) => [...prevTodos, newTodo]);

        setInputValue("")
    }
  };

  return (
    <div className="app-container">
      <h1 className="title"> Lista de tarefas:</h1>

      {/* Form par adicionar tarefas */}
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Adicione uma tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-button">
          Adicionar
        </button>
      </form>

      {/* Lista de tarefas */}
      {todos.length === 0 && <p className="empty">Não há tarefas</p>}

      <ul className="todo-list">
        {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
            {todo.text}
            <button className="deleteButton">Excluir</button>
            </li>
        ))}
        
      </ul>

    </div>
  );
};

export default TodoApp;


