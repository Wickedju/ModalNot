import fechar from "../../../assets/img/letra-x.png";
import "../Balao/balao.css" 


export default function Balao (){
    return(
        <div className="balaoNotificacao">
                        <div className="balao"> <div className="botaoFechar"><img src={fechar} className="fecharX"/> </div></div>
                        <div className="balao"> </div>
                        <div className="balao"> </div>
                    </div>

    )

 
}