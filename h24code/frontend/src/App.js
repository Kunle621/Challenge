import React, { useState, useEffect } from 'react';
import CodeForm from './CodeForm';
import SnippetList from './SnippetList';

function App() {
  const [snippets, setSnippets] = useState([]);

  const fetchSnippets = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/snippets', {
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Réponse non valide de l’API');
      }

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
    <div className="container mt-5">
      <h1>CodeSpace - H24Code</h1>
      <CodeForm onNewSnippet={fetchSnippets} />
      <hr />
      <SnippetList snippets={snippets} />
    </div>
  );
}

export default App;
