import "./BannerDois.scss";

import foto from  "../../assets/BannerDois.png";


function BannerDois () {
    return(
        <div className="dois">
            <h2>NOVIDADES PARA VOCÊ</h2>
            <img src={foto} alt="" />
        </div>
    );
}
export default BannerDois;