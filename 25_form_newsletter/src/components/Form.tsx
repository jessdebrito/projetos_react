import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setErrors(null);

    const data: User = {
      name,
      email,
      agree,
    };

    const validateErrors = validate(data);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setName("");
    setEmail("");
    setAgree(false);

    alert("Agradecemos por sua inscrição!");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="name">
          Nome
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Digite o seu nome"
          className="rounded-lg focus:ring-0 focus:outline-none py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
        />
        {errors?.name && (
          <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">
          E-mail
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Insira o seu e-mail"
          className="rounded-lg focus:ring-0 focus:outline-none py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
        />
        {errors?.email && (
          <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
        )}
      </div>

      <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2">
          Leia os termos.
        </a>
        <div className=" flex gap-2 items-center">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label className="text-sm" htmlFor="agree">
            Concordo com os termos.
          </label>
          
        </div>
        {errors?.agree && (
          <small className="text-xs text-red-500 mt-1">{errors?.agree}</small>
        )}
      </div>

      <button
        type="submit"
        className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-2 rounded-lg text-white"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default Form;
