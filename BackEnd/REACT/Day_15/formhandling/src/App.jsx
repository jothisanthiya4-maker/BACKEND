
import React, { useState } from 'react'

const App = () => {

  const [input, setInput] = useState("")
  const [vowels, setVowels] = useState("aeiouAEIOU")
  const [result, setResult] = useState("")

  const handleclick = () => {

    setResult("")

    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        if (input[i] == vowels[j]) {
          setResult((p) => `${p} ${input[i]}`)
        }
      }
    }

    setInput("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="w-full max-w-lg bg-white p-10 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Vowel Finder
        </h1>

        <input
          type="text"
          placeholder="Enter Text..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-4 text-lg mb-5 outline-none focus:border-blue-500"
        />

        <button
          onClick={handleclick}
          className="w-full bg-blue-500 text-white text-lg font-medium py-4 rounded-lg hover:bg-blue-600"
        >
          Click to See
        </button>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 break-words">
          Vowels: {result}
        </h2>

      </div>

    </div>
  )
}

export default App
