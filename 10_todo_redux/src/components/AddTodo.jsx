import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";
import { useState } from "react";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Adicione uma tarefa..."
      ></input>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddTodo;
