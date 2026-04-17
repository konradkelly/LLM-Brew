import './Hero.css';
import heroImage from './images/hero_image.jpg';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-copy">
          <h2 id="hero-heading">Brewing clarity on 2026&apos;s frontier models</h2>
          <p className="hero-sub">
            Compare capabilities, pricing, and ratings—then choose what fits you best.
          </p>
          <a href="#models" className="btn hero-cta">
            Explore models
          </a>
        </div>
        <div className="hero-visual">
          <img
            src={heroImage}
            alt="LLM-Brew Hero Image"
            className="hero-image"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
