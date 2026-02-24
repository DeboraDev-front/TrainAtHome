import { Link } from "react-router-dom";
import "./Home.css";

function Home(){
    return (
        <div className="home-container">
            <h1 className="logo">TrainHome</h1>

            <p className="message">
                Transforme sua casa no seu espaço de evolução. 
                Pequenos treinos, grandes resultados.
            </p>

            <div className="buttons">
                <Link to="/treinos" className="btn">
                    Ver meus treinos
                </Link>

                <Link to="/adicionar" className="btn secondary">
                    Adicionar novo treino
                </Link>
            </div>
        </div>
    );
}

export default Home;