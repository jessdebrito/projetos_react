type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <h2>Buscar usuário:</h2>
      <p>Conheça os melhores repositórios</p>
      <div>
        <input
          type="text"
          placeholder="Digite o nome de usuário"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => loadUser (userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
