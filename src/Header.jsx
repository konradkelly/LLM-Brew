import './Header.css'
import coffeeCup from './images/brown-coffee-cup.png'

export default function Header() {
    return (
        <div className="header-container">
            <header className="header">
                <img src={coffeeCup} alt="Brown Coffee Cup" className="header-logo" />
                <h1>LLM-Brew</h1>
                <button className="btn header-Btn">Models</button>
                <button className="btn header-Btn">Datasets</button>
                <button className="btn header-Btn">Pricing</button>
            </header>
        </div>
    );
}