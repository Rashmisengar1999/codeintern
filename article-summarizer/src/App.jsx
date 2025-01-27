import React from "react";
import{ useState } from "react"
import axios from "axios"


function App() {
  const [text, setText] = useState(0)
  
  const increseValue = () => {
    setText(text + 1)
  }

const summarize = async () => {
  const url = 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHindustan_Times&lang=en&engine=2';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8208a79bf3msha700e186dd816acp108732jsnd11db5da3deb',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};

const response = await axios.request(option)
console.log(response)


}

  console.log(text)
  return(
    <div className="text-blue-600 text-xl">
         <div className="h-screen w-screen bg-slate-300 flex items-center justify-center flex-col gap-y-10">
          <h1 className="text-2xl font-bold">Article Summarizer</h1>
          <div className="flex item-center justify-center gap-x-2">
            <input type="text" className="outline-none border-none rounded-lg  px-5" />
            <button className="bg-black text-white px-1 rounded-lg" onClick={summarize}>Click</button>
          </div>

          </div> 
    </div>
  )
}

export default App;