import "../css/Formulario.css"
import { useState} from "react";

const Formulario = (

) => {
    const [moneda, setMoneda] = useState("");
    const [cripto, setCripto] = useState("");
    const [mensaje, setMensaje] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMensaje(true);
    };

return(
    <div className="modal-overlay" role="dialog" aria-modal="true">
        <div className="modal-content">
            <form className="formulario" onSubmit={handleSubmit}>
                <div className="campo">
                    <label className="label">Tipo de Moneda</label>
                <select 
                className="select"
                value={moneda}
                onChange={(e) => setMoneda(e.target.value)}
                >
                <option value="">Selecciona</option>
                <option value="USD">Dolar USD</option>
                <option value="MXN">Peso Mexicano MXN</option>
                <option value="EUR">Euro EUR</option>
                <option value="GBP">Libra Esterlina GBP</option>
                </select>
            </div>

            <div className="campo">
                <label className="label">Criptomoneda</label>
                <select 
                className="select"
                value={cripto}
                onChange={(e) => setCripto(e.target.value)}
                >
                <option value="">Selecciona</option>
                <option value="BTC">Bitcoin</option>
                <option value="ETH">Ethereum</option>
                <option value="SOL">Solana</option>
                </select>
            </div>

            <button type="submit" className="btn-cotizar">
                Cotizar
            </button>
            {mensaje && <p className="alerta-info">Formulario creado</p> }
            </form>
        </div>
    </div>
);
};
export default Formulario;
