import React, { useState } from 'react';

const SnippetList = ({ snippets }) => {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? snippets : snippets.filter(s => s.category === filter);

  const copy = text => {
    navigator.clipboard.writeText(text).then(() => alert('Code copié !'));
  };

  return (
    <div className="container mt-4">
      <h2>Filtrer par catégorie</h2>
      <button className="btn btn-secondary me-2" onClick={() => setFilter('all')}>Tous</button>
      <button className="btn btn-info me-2" onClick={() => setFilter('php')}>PHP</button>
      <button className="btn btn-info me-2" onClick={() => setFilter('html')}>HTML</button>
      <button className="btn btn-info me-2" onClick={() => setFilter('css')}>CSS</button>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Catégorie</th>
            <th>Code</th>
            <th>Copier</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(snippet => (
            <tr key={snippet.id}>
              <td>{snippet.title}</td>
              <td>{snippet.description}</td>
              <td>{snippet.category.toUpperCase()}</td>
              <td><pre><code>{snippet.code}</code></pre></td>
              <td><button className="btn btn-sm btn-success" onClick={() => copy(snippet.code)}>Copier</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SnippetList;
