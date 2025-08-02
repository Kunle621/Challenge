import React, { useState, useEffect } from 'react';
import CodeForm from './CodeForm';
import SnippetList from './SnippetList';

function App() {
  const [snippets, setSnippets] = useState([]);

  const fetchSnippets = async () => {
    try {
      const response = await fetch('/api/snippets');
      const data = await response.json();
      setSnippets(data);
    } catch (error) {
      console.error('Erreur de récupération des snippets', error);
    }
  };

  useEffect(() => {
    fetchSnippets();
  }, []);

  return (
    <div>
      <CodeForm onNewSnippet={fetchSnippets} />
      <hr />
      <SnippetList snippets={snippets} />
    </div>
  );
}

export default App;
