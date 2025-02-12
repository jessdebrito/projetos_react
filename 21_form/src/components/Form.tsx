import { useForms } from "../hooks/useForms";
import { FormSchema } from "../schemas/formSchema";

const Form = () => {
  const { register, handleSubmit, errors } = useForms();

  const onSubmit = (data: FormSchema) => {
    console.log(data); // Ponto para enviar para o backend as infos
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-96 bg-white p-4 rounded-md border border-slate-300"
    >
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          placeholder="Digite o seu nome"
          {...register("name")}
          className="h-10 pl-2 rounded-md border border-slate-300"
        />
        {errors.name && (
          <span className="text-red-500 italic text-xs">
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="lastname">Sobrenome:</label>
        <input
          type="text"
          id="lastname"
          placeholder="Digite o seu sobrenome"
          {...register("lastname")}
          className="h-10 pl-2 rounded-md border border-slate-300"
        />

        {errors.lastname && (
          <span className="text-red-500 italic text-xs">
            {errors.lastname.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="gender">Gênero:</label>
        <select
          id="gender"
          {...register("gender")}
          className="h-10 pl-1 rounded-md border border-slate-300"
        >
          <option value="select">Selecione</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Outro</option>
        </select>

        {errors.gender && (
          <span className="text-red-500 italic text-xs">
            {errors.gender.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          id="email"
          placeholder="Digite o seu e-mail"
          {...register("email")}
          className="h-10 pl-2 rounded-md border border-slate-300"
        />

        {errors.email && (
          <span className="text-red-500 italic text-xs">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          placeholder="Digite uma senha"
          {...register("password")}
          className="h-10 pl-2 rounded-md border border-slate-300"
        />

        {errors.password && (
          <span className="text-red-500 italic text-xs">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="confirmpassword">Confirmar senha:</label>
        <input
          type="password"
          id="confirmpassword"
          placeholder="Digite uma senha"
          {...register("confirmpassword")}
          className="h-10 pl-2 rounded-md border border-slate-300"
        />

        {errors.confirmpassword && (
          <span className="text-red-500 italic text-xs">
            {errors.confirmpassword.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-2">

        <div className="flex gap-2">
          <input
            type="checkbox"
            id="agree"
            placeholder="concorda com os termos"
            {...register("agree")}
          />
          <label htmlFor="agree">Concorda com os termos de uso?</label>
        </div>

        {errors.agree && (
          <span className="text-red-500 italic text-xs">
            {errors.agree.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full h-11 bg-cyan-300 rounded-md my-2 hover:bg-cyan-400 transition-all"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
