import { useState } from 'react'
import Header from './Header'
import ContentSection from './Content/ContentSection';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ContentSection 
        Name="hi"
        Price="hi"
        Description="hi"
        Rating="hi"
        Review="hi"
      />
    </>
  )
}

export default App
