import "./StylesExemples.css";
import styles from "./StylesExemples.module.css";


const StylesExemples = () => {

    //inline
    const inlineStyle = {
        color: "Blue",
        fontSize: "20px",
    }

  return (
    <div>
        <h2 style={inlineStyle}>Estilos inline</h2>
        
        {/* arquivo de estilos */}
        <p className="text"> Arquivo CSS</p>
        {/*  CSS Modules */}
        <p className={styles.textPurple}> CSS Modules</p>

        </div>
  )
}

export default StylesExemples