import './Header.css'
import coffeeCup from './images/brown-coffee-cup.png'

export default function Header() {
    return (
        <div className="header-container">
            <header className="header">
                <img src={coffeeCup} alt="Brown Coffee Cup" className="header-logo" />
                <h1>LLM-Brew</h1>
                <nav className="header-nav">
                    <a href="#models" className="btn header-Btn">Models</a>
                    <button className="btn header-Btn">Datasets</button>
                    <a href="#pricing" className="btn header-Btn">Pricing</a>
                </nav>
            </header>
        </div>
    );
}