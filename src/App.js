import styled from "styled-components";
import { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [data, setData] = useState({})
  
  useEffect(() => {
    handleFetch();
  }, [])
  
  useEffect(() => {
    console.log("quote changed");
  }, [data])

  const handleFetch = async () => {
    let response = await fetch("https://uselessfacts.jsph.pl/random.json?langn");
    let data = await response.json();
    setData(data);
  };

  return (
    <StyledWrapper>
      <h1>Useless Facts Generator</h1>
      <button className="button" onClick={handleFetch}>New Fact</button>
      <p className="output">{data.text}</p>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .button {
    height: 45px;
    width: 45%;
    background-color: lightgreen;
  }

  .output {
    width: 50%;
    border: 2px solid black;
    padding: 10px;
    background-color: yellow;
    text-align: center;
  }
`

export default App;