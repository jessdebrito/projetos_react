import { useState } from "react";
//useState = hook
// sempre que vamos alterar o valor de algo => useState
// se é somente leitura => var, state

const UseStateComponent = () => {
  //   let count = 0;
  //crio uma variável de consulta e uma de alteração e inicio o hook
  const [count, setCount] = useState(0);

  const increment = () => {
    // count += 1;
    // É a mesma coisa, mas é a forma segura de garantir que está pegando o valor correto e não dar diferença de valor no console e na tela
    setCount((prevCount) => prevCount + 1);
    // setCount(count + 1);

    console.log(count);
  };


  // 
  const [user, setUser] = useState({
    name: "Ana",
    hobbies: ["Leitura", "Programação"],
  });

  const updateUserAge = () => {
    setUser((prevUser) => (
        {
            ...prevUser,
            age: prevUser.age + 1,
        }
    ))
  }

  //

  return (
    <div>
      <h2>Contador:</h2>
      <p>Você clicou {count} vezes</p>
      <button onClick={increment}>Incrementar</button>

      <p>
        Meu nome é {user.name}, tenho {user.age} anos. Em meu tempo livre gosto
        de {user.hobbies[0]} e {user.hobbies[1]}.
      </p>

      <button onClick={updateUserAge}> Incrementar idade</button>
    </div>
  );
};

export default UseStateComponent;
