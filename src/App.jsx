import React, { useState, useEffect } from "react"
import "./App.css";

const App = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    handleFetch()
  }, [])

  useEffect(() => {
    console.log("you changed the data")
  }, [data])

  // const handleFetch = async () => {
  //   let response = await fetch("https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote");
  //   let data = await response.json();
  //   setData(data)
  // };

  const handleFetch = async () => {
    let response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en%22")
    let data = await response.json()
    setData(data)
  };


  return (
    <div>
      <h1 className="title">Star Wars</h1>
      <p>{data.content}</p>
      <button onClick={handleFetch}>handleFetch</button>
    </div>
  );
};


export default App;