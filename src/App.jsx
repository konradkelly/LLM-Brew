import Header from './Header.jsx'
import Hero from './Hero.jsx'
import ContentSection from './Content/ContentSection'
import PricingCard from './Pricing.jsx'
import Reviews from './Reviews.jsx'
import Footer from './Footer.jsx'
import claudeLogo from './images/claude_code.png'
import codexLogo from './images/codex.png'
import qwenLogo from './images/qwen_code.png'

function App() {
  const plans = [
    { name: "Claude Code Plan", image: claudeLogo, price: "$200/month" },
    { name: "The Codex Plan", image: codexLogo, price: "$150/month" },
    { name: "Qwen Code Plan", image: qwenLogo, price: "$15/month" },
  ];
  const llms = [
    {
      Name: "OpenAI GPT-4",
      Image: "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
      Price: "$20/mo",
      Description: "State-of-the-art language model by OpenAI, excels at reasoning and creative tasks.",
      Rating: " ★★★★☆ 4.9/5",
      Review: "Outstanding performance and versatility."
    },
    {
      Name: "Google Gemini",
      Image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
      Price: "$15/mo",
      Description: "Google's advanced LLM, great for search and summarization tasks.",
      Rating: " ★★★★☆ 4.7/5",
      Review: "Excellent for research and information retrieval."
    },
    {
      Name: "Anthropic Claude",
      Image: "https://cdn.worldvectorlogo.com/logos/anthropic-1.svg",
      Price: "$18/mo",
      Description: "Claude by Anthropic focuses on safety and helpfulness in conversations.",
      Rating: " ★★★★☆ 4.8/5",
      Review: "Very safe and reliable for business use."
    },
    {
      Name: "Meta Llama 2",
      Image: "https://cdn.worldvectorlogo.com/logos/meta-3.svg",
      Price: "Free",
      Description: "Open-source LLM by Meta, great for experimentation and research.",
      Rating: " ★★★★☆ 4.5/5",
      Review: "Flexible and open, but requires setup."
    },
    {
      Name: "Cohere Command",
      Image: "https://designcompass.org/wp-content/uploads/2023/04/cohere-02.png",
      Price: "$10/mo",
      Description: "Cohere's LLM is optimized for business and enterprise NLP tasks.",
      Rating: "★★★★☆ 4.6/5",
      Review: "Great for enterprise and API integration."
    }
  ];

  return (
    <>
      <Header />
      <Hero />
      <div id="models" className="content-cards-grid">
        {llms.map((llm) => (
          <ContentSection
            key={llm.Name}
            Name={llm.Name}
            Image={llm.Image}
            Price={llm.Price}
            Description={llm.Description}
            Rating={llm.Rating}
            Review={llm.Review}
          />
        ))}
      </div>
      <div id="pricing" className="pricing-container">
        <h2>Our Plans</h2>
        <div className="pricing-cards">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              image={plan.image}
              price={plan.price}
            />
          ))}
        </div>
      </div>
      <Reviews />
      <Footer />
    </>
  )
}

export default App
