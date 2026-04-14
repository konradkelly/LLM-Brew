import { useState } from 'react'
import Header from './Header'
import ContentSection from './Content/ContentSection';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="content-sections">
        <ContentSection 
          Name="hi"
          Price="hi"
          Description="hi"
          Rating="hi"
          Review="hi"
        />
        <ContentSection 
          Name="hi"
          Price="hi"
          Description="hi"
          Rating="hi"
          Review="hi"
        />
        
      </div>
    </>
  )
}

export default App
