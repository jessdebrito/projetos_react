import Form from "./components/Form";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-[2rem] text-white font-bold">Increva-se!</h1>
      <p className="text-white">Assine nossa Newsletter e mantenha-se informado.</p>

      <div className="w-96 mt-4 bg-stone-200 px-4 py-5 rounded-lg">
        <Form />
      </div>
      <p className="text-slate-100 text-sl w-96 mt-2 text-center">
        Ao se inscrever, você receberá diariamente um resumo das notícias mais importantes.
      </p>
    </div>
  );
}

export default App;
