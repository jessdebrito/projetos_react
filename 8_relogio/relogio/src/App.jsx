import { useState, useEffect } from "react";
import TimeZoneClock from "./components/TimeZoneClock";

function App() {
  const fusosHorarios = [
    "UTC",
    "GMC",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europa/London",
    "Europa/Berlin",
    "Asia/Tokyo",
  ];

  const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [fusosHorariosSelecionados, setFusosHorariosSelecionados] = useState([
    fusoHorarioLocal,
  ]);

  const adicionarFusoHOrario = (e) => {
    const novoFuso = e.target.value;
    if (!setFusosHorariosSelecionados.includes(novoFuso)) {
      setFusosHorariosSelecionados([...setFusosHorariosSelecionados, novoFuso]);
    }
  };

  return (
    <div>
      <h1>Relógio</h1>
      <select onChange={(e) => adicionarFusoHOrario(e)}>
        <option value="" disabled select>
          Selecione o fuso horário
        </option>
        {fusosHorarios.map((fuso) => (
          <option key={fuso} value={fuso}>
            {fuso}
          </option>
        ))}
      </select>
      <div>
        {fusosHorariosSelecionados.map((fuso) => (
          <TimeZoneClock key={fuso} timeZone={fuso} />
        ))}
      </div>
    </div>
  );
}

export default App;
