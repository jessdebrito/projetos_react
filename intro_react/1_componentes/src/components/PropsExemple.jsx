// as propriedades de um argumento dessa função vão chegar num objeto chamado props
// pode ter mais de um

const PropsExemple = ({nome, idade}) => {
  return (
    <div>
      <h3>Olá, {nome}</h3>
      <p>Eu tenho {idade} anos.</p>
    </div>
  );
};

export default PropsExemple;
