import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [sortedWord, setSortedWord] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: input })
      });
      const result = await response.json();
      if (result.word) {
        setSortedWord(result.word);
      } else {
        setSortedWord('Error: ' + result.error);
      }
    } catch (err) {
      setSortedWord('Error connecting to the server.');
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Sort Characters</h1>
      <input
        className="input"
        type="text"
        placeholder="Enter word"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        className="button"
        onClick={handleSubmit}
      >
        Sort
      </button>
      <p className="output">
        <strong>Sorted Output:</strong> {sortedWord}
      </p>
    </div>
  );
}

export default App;
