// src/App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🚀 Full-Stack App</h1>
      <p>Backend says: <strong>{message || 'Loading...'}</strong></p>
    </div>
  );
}

export default App;
