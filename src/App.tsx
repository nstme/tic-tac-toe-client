import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type DataHandler = (value: string) => void;

async function fetchData(cb: DataHandler) {
  const response = await fetch("http://localhost:3001");
  const text = await response.text();

  cb(text);
}

function App() {
  const [text, setText] = useState<string>("loading...");

  useEffect(() => {
    fetchData(setText);
  }, [text]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
