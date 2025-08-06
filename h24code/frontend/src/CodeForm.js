import React, { useState } from 'react';

const CodeForm = ({ onNewSnippet }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    code: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    if (name === 'category') {
      insertTemplate(value);
    }
  };

  const insertTemplate = (category) => {
    let template = '';

    switch (category) {
      case 'php':
        template = `<?php\n\n// Votre code ici\n\n?>`;
        break;
      case 'html':
        template = `<!DOCTYPE html>\n<html lang="fr">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Titre de la page</title>\n</head>\n<body>\n\n    <!-- Votre contenu ici -->\n\n</body>\n</html>`;
        break;
      case 'css':
        template = `/* Votre style CSS ici */\nbody {\n    font-family: Arial, sans-serif;\n}`;
        break;
      default:
        template = '';
    }

    setForm((prev) => ({
      ...prev,
      code: template
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/snippets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setMessage("Code créé avec succès !");
        setForm({
          title: '',
          description: '',
          category: '',
          code: ''
        });

        if (onNewSnippet) onNewSnippet();
      } else {
        const error = await response.json();
        alert("Erreur : " + (error.message || 'Une erreur est survenue'));
      }
    } catch (error) {
      alert("Erreur lors de l'envoi : " + error.message);
    }
  };

  return (
    <div className="container mt-4">
      <nav className="nav justify-content-center bg-white shadow-sm py-3 mb-4">
        <a className="nav-link active" href="/">CODESPACE</a>
        <a className="btn btn-primary" href="/liste">Consulter les codes enregistrés</a>
      </nav>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>CRÉATION DE CODE</legend>

          {message && (
            <div className="alert alert-success alert-dismissible fade show">
              <strong>{message}</strong>
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="title" className="form-label">Titre</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              value={form.title}
              onChange={handleChange}
              placeholder="Entrer le titre du code"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows="4"
              value={form.description}
              onChange={handleChange}
              placeholder="Brève explication de ce que fait le code"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">Catégorie</label>
            <select
              id="category"
              name="category"
              className="form-control"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">-- Sélectionnez --</option>
              <option value="php">PHP</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="code" className="form-label">Code</label>
            <textarea
              id="code"
              name="code"
              className="form-control"
              rows="10"
              value={form.code}
              onChange={handleChange}
              placeholder="Entrez ici le code source"
              required
            ></textarea>
          </div>

          <div className="text-end">
            <button type="submit" className="btn btn-primary">Créer</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default CodeForm;
