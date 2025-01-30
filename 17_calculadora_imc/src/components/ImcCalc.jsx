import { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";


const ImcCalc = ({calcImc}) => {
  const { height, setHeight } = useState(""); // def. os hooks de manipulação de dados
  const { weight, setWeight } = useState(""); // depois dizer qual input pertence a ql estado


  const clearForm = (e) => {
    e.preventDefault(); // para não execugar o submit do formulário
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text. replace(/[^0-9,]/g, "")

  }

  const handleHeightChange= (e) => {
    const updatedValue = validDigits(e.target.value)
    setHeight(updatedValue);
  };
  const handleWeightChange= (e) => {
    const updatedValue = validDigits(e.target.value)
    setWeight(updatedValue);
  };



  return (
    <div className="calc-container">
      <h2>Calculadora de IMC</h2>

      <form id="imc-form">
        <div className="form-input">


          <div className="form-control">
            <label htmlFor="height">Altura</label>
            <input type="text" name="height" id="height"
              onChange={(e) => handleHeightChange(e)}
              value={height}
              placeholder="Exemplo 1,75" />
          </div>

          <div className="form-control">
            <label htmlFor="weight">Peso</label>
            <input type="text" name="weight" id="weight"
              value={weight}
              onChange={(e) =>  handleWeightChange(e)}
              placeholder="Exemplo 75" />
          </div>


        </div>

        <div className="action-control">

          <Button id="calc-btn" text="Cacular" action={(e) => calcImc(e, height, weight)} />
          <Button id="clear-btn" text="Limpar" action={clearForm} />

        </div>
      </form>
    </div>
  )
}

export default ImcCalc