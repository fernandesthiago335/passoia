import "../Lançamentos/Lançamentos.scss";
import { useState } from "react";


import azul from "../../assets/azul.png";
import vermelho from "../../assets/vermelho.png";
import marrom from "../../assets/marrom.png";
import base from "../../assets/base.png";

function Lançamentos () {

    const [cor, setCor] = useState(vermelho);



    return(
        
     <div className="lancamento">
        <h2>Cor Favorita</h2>

        <img src={cor} alt="Batom" />

        <button onClick={() => setCor(vermelho)}>Vermelho</button>
        <button onClick={() => setCor(azul)}>Azul</button>
        <button onClick={() => setCor(marrom)}>Marrom</button>
        <button onClick={() => setCor(base)}>Base</button>

     </div>
    


    );
}

export default Lançamentos;