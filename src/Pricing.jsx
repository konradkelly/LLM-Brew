import './Pricing.css';

export default function PricingCard({ name, image, price }) {
  return (
    <div className="pricing-card">
      <div className="pricing-card-image-placeholder">
        <img src={image} alt={name + ' Logo'} />
      </div>
      <h3>{name}</h3>
      <p className="price">{price}</p>
      <button className="btn pricing-btn">Select Plan</button>
    </div>
  );
}