import React, { useState } from 'react'
import axios from "axios"

function App() {
  const [url, setUrl] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const handleURL = e => {
    setUrl(e.target.value)
  }

  const handleArticleSummary = async (e) => {
    e.preventDefault()
    setLoading(true)

    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url: `${url}`,
        lang: 'en',
        engine: '2'
      },
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': '8ed0a5ef6dmshd866926a78d75acp1c2864jsnf779ab7ab1e5',
        'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      setLoading(false)
      setResponse(response.data.summary)
    } catch (error) {
      setLoading(false)
      alert("Please try again!")
    }
  }



  return (
    <div className="h-screen w-screen bg-slate-400 flex flex-col items-center">
 
  <h1 className="text-4xl font-bold text-black mt-10">Article Summarizer</h1>

  
  <div className="flex items-center justify-center flex-col gap-y-5 mt-10">
    
    <div className="flex items-center justify-center gap-x-2" onChange={handleURL}>
      <input
        type="url"
        placeholder="Enter article URL"
        className="h-10 border-black outline-none rounded-lg px-3 w-96"
      />
      <button
        className="h-10 px-2 bg-slate-500 text-white font-semibold hover:bg-slate-800 rounded-lg"
        onClick={handleArticleSummary}
      >
        {loading ? "Wait loading!" : "Summarize"}
      </button>
    </div>

    <div
      className={`flex items-center justify-center flex-col gap-y-2 w-[600px] h-80 ${
        loading ? "bg-transparent text-black" : "bg-black text-white"
      } rounded-lg p-5`}
    >
      <p>
        {loading ? "Loading..." : response || "Your summarized content will appear here."}
      </p>
    </div>
  </div>
</div>

  )
}

export default App
