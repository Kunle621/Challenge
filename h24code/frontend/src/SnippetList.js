import React, { useState } from 'react';

const SnippetList = ({ snippets }) => {
  const [filter, setFilter] = useState('all');

  const filteredSnippets =
    filter === 'all'
      ? snippets
      : snippets.filter((s) => s.category.toLowerCase() === filter);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Code copié dans le presse-papiers !'))
      .catch((err) => alert('Échec de la copie : ' + err));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Filtrer par catégorie</h2>

      <div className="mb-4">
        <button className={`btn me-2 ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setFilter('all')}>Tous</button>
        <button className={`btn me-2 ${filter === 'php' ? 'btn-info' : 'btn-outline-info'}`} onClick={() => setFilter('php')}>PHP</button>
        <button className={`btn me-2 ${filter === 'html' ? 'btn-info' : 'btn-outline-info'}`} onClick={() => setFilter('html')}>HTML</button>
        <button className={`btn me-2 ${filter === 'css' ? 'btn-info' : 'btn-outline-info'}`} onClick={() => setFilter('css')}>CSS</button>
      </div>

      {filteredSnippets.length > 0 ? (
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Titre</th>
              <th>Description</th>
              <th>Catégorie</th>
              <th>Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredSnippets.map((snippet) => (
              <tr key={snippet.id}>
                <td>{snippet.title}</td>
                <td>{snippet.description}</td>
                <td>{snippet.category.toUpperCase()}</td>
                <td style={{ maxWidth: '400px' }}>
                  <pre style={{ whiteSpace: 'pre-wrap' }}>
                    <code>{snippet.code}</code>
                  </pre>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => copyToClipboard(snippet.code)}
                  >
                    Copier
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-warning">Aucun snippet disponible.</div>
      )}
    </div>
  );
};

export default SnippetList;
