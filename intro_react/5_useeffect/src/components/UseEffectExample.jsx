import { useState, useEffect } from "react";

const UseEffectExample = () => {
  // Sem dependências, ou seja, cada coisa que acontecer na tela esse elemento vai rodar
  useEffect(() => {
    console.log("Rodou UE1");
  });
  // com dependencias vazias // array de dep. vazio
  useEffect(() => {
    console.log("Rodou UE2");
  }, []);

  // useState ativa a re-renderização
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0); // 2

  // COM dependências
  //agora atrelado a um estado, agora só vai ser ativado se o estado mudar
  useEffect(() => {
    console.log("Rodou UE3");
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar contagem</button>
      <br/>
      <br/>
      <p>{count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>Aumentar contagem</button>
    </div>
  );
};

export default UseEffectExample;
