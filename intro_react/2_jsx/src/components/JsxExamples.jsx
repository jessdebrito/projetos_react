const JsxExamples = () => {
  const userName = "Carlos";

  const user = {
    name: "Ana",
    lastName: "Souza",
  };

  function getGreeting(name) {
    return `Olá ${name}`;
  }

  const userIsLoggedIn = false;
  const userRole = "Admin";

  const users = [
    { id: 0, name: "John Doe" },
    { id: 1, name: "Jane Doe" },
    { id: 2, name: "João Doe" },
    { id: 3, name: "Joana Doe" },
  ];

  return (
    <div>
      <h2>JsxExamples</h2>
      <p>Conteudo que o usuário vai ver</p>
      <p>O nome do usuário 1 é: {userName}</p>
      <p>
        O nome do usuário 2 é: {user.name} {user.lastName}
      </p>
      <p>{2 + 2}</p>
      <p>{getGreeting(userName)}</p>
      <p>{getGreeting("Matheus")}</p>

      {/* DIFERENÇAS DO HTML */}
      <div className="alguma-coisa">Este cara</div>

      <button onClick={() => alert("Testando! 1 - 2 - 3 Está funcionando?")}>
        Clique em mim
      </button>
      <input type="text" placeholder="Digite algo" />

      {/* RENDERIZAÇÃO CONDICIONAL */}
      {/* {userIsLoggedIn ? (<p>Caso: está logado</p>) : (<p>Caso: não está logado</p>)} */}
      {userIsLoggedIn ? <p>Caso: está logado</p> : <p>Caso: não está logado</p>}

      <p>{userRole === "Admin" && "Você é um admin"}</p>

      {/* RENDERIZAÇÃO DE LISTAS */}
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JsxExamples;
