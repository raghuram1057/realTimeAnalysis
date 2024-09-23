import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [uniqueWords, setUniqueWords] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    calculateStats();
  }, [text]);

  const calculateStats = () => {
    // Unique word count (case-insensitive)
    const words = text.match(/\b\w+\b/g) || [];
    const uniqueWordsSet = new Set(words.map((word) => word.toLowerCase()));
    setUniqueWords(uniqueWordsSet.size);

    // Character count excluding spaces and punctuation
    const chars = text.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    setCharCount(chars.length);
  };

  const handleReplace = () => {
    const updatedText = text.split(searchText).join(replaceText);
    setText(updatedText);
  };

  return (
    <div className="App">
      <h1>Text Analyzer</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        rows={10}
        cols={50}
      ></textarea>

      <div className="stats">
        <p>Unique Words: {uniqueWords}</p>
        <p>Character Count (excluding spaces and punctuation): {charCount}</p>
      </div>

      <div className="replace-container">
        <input
          type="text"
          placeholder="Search String"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Replace With"
          value={replaceText}
          onChange={(e) => setReplaceText(e.target.value)}
        />
        <button onClick={handleReplace}>Replace All</button>
      </div>
    </div>
  );
};

export default App;
