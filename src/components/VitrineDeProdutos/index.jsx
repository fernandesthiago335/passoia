import "./VitrineDeProdutos.scss";

import olhos from "../../assets/olhos.png";
import rosto from "../../assets/rosto.png";
import labios from "../../assets/labios.png";
import tendencias from "../../assets/tendencia.png";

function VitrineDeProdutos (){
    return(

        <div className="vitrine">
            <h2>LOOKS E DICAS DE MAQUIAGEM</h2>

            <img src={olhos} alt="olhos" />
            <img src={rosto} alt="rosto" />
            <img src={labios} alt="labios" />
            <img src={tendencias} alt="tendencias" />



        </div>
    );
}
export default VitrineDeProdutos;