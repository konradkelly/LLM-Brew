import { useState } from 'react'
import Header from './Header'
import ContentSection from './Content/ContentSection';
import './App.css'




function App() {
  const llms = [
    {
      Name: "OpenAI GPT-4",
      Image: "https://upload.wikimedia.org/wikipedia/commons/0/04/OpenAI_Logo.svg",
      Price: "$20/mo",
      Description: "State-of-the-art language model by OpenAI, excels at reasoning and creative tasks.",
      Rating: "4.9/5",
      Review: "Outstanding performance and versatility."
    },
    {
      Name: "Google Gemini",
      Image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      Price: "$15/mo",
      Description: "Google's advanced LLM, great for search and summarization tasks.",
      Rating: "4.7/5",
      Review: "Excellent for research and information retrieval."
    },
    {
      Name: "Anthropic Claude",
      Image: "https://avatars.githubusercontent.com/u/110084066?s=200&v=4",
      Price: "$18/mo",
      Description: "Claude by Anthropic focuses on safety and helpfulness in conversations.",
      Rating: "4.8/5",
      Review: "Very safe and reliable for business use."
    },
    {
      Name: "Meta Llama 2",
      Image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Meta_Platforms_Logo.png",
      Price: "Free",
      Description: "Open-source LLM by Meta, great for experimentation and research.",
      Rating: "4.5/5",
      Review: "Flexible and open, but requires setup."
    },
    {
      Name: "Cohere Command",
      Image: "https://avatars.githubusercontent.com/u/78782312?s=200&v=4",
      Price: "$10/mo",
      Description: "Cohere's LLM is optimized for business and enterprise NLP tasks.",
      Rating: "4.6/5",
      Review: "Great for enterprise and API integration."
    }
  ];

  return (
    <>
      <Header />
      <div className="content-sections">
        {llms.map((llm, idx) => (
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
    </>
  )
}

export default App
