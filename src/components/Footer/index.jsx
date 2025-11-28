import "./footer.scss";

import mastercard from "../../assets/mastercard.png";
import boleto from "../../assets/boleto.png";
import pix from "../../assets/pix.png";
import visa from "../../assets/visa.png";
import socialsum from "../../assets/socialsum.png";
import socialsDois from "../../assets/socialsDois.png";
import socialsTres from "../../assets/socialsTres.png";
import socialsQuatro from "../../assets/socialsQuatro.png";
function footer() {
    return(
        <footer className="footer">

            <div className="atendimento">

                <h3>ATENDIMENTO</h3>
                
                <li>Fale Conosco</li>
                <li>Perguntas Frequentes</li>
                <li>Meus Pedidos</li>
                <li>Nossas Lojas</li>

             </div>

             <div>
                <h3>FORMAS DE PAGAMENTO</h3>

                <img src={mastercard} alt="mastercard" />
                <img src={visa} alt="visa" />
                <img src={pix} alt="pix" />
                <img src={boleto} alt="boleto" />
            </div>

            <div className="redesSociais">

                <h3>SIGA-NOS NAS REDES SOCIAIS</h3>

                <img src={socialsum} alt="socialum" />
                <img src={socialsDois} alt="socialDois" />
                <img src={socialsTres} alt="socialTres" />
                <img src={socialsQuatro} alt="socialQuatro" />

            </div>

        </footer>
    );
}
export default footer;