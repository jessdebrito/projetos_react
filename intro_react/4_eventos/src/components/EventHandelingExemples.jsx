// Um evento nada mais é que ter um elemento

import { useState } from "react";

//  que a medida que o usuario interage, o elemento "reage"
const EventHandelingExemples = () => {
  const handleClick = () => {
    alert("Testando");
  };
  const handleGreet = (name) => {
    alert([`Olá ${name}`]);
  };

  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // previne que o html recarregue a página
    alert([`E-mail de contato enviado, ${name}`]);
  };

  return (
    <div>
      <h2>Eventos</h2>
      <button onClick={() => alert("Hello World")}>Clique aqui</button>
      <button onClick={handleClick}>Clique aqui 2</button>
      <br />
      <button onClick={() => handleGreet("Ana")}>Dizer olá Anna</button>
      <button onClick={() => handleGreet("Pedro")}>Dizer olá Pedro</button>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default EventHandelingExemples;
