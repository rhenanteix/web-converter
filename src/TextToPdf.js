import React, { useState } from 'react';
import jsPDF from 'jspdf';

function TextToPdf() {
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    if (text.trim() === '') {
      setError('Por favor, insira algum texto para converter.');
      return;
    }

    try {
      // Create a new jsPDF instance
      const doc = new jsPDF();

      // Add the text to the PDF
      doc.text(text, 10, 10);

      // Save the PDF with a name
      doc.save('output.pdf');

      setError(null);
    } catch (err) {
      console.error('Erro ao converter texto para PDF:', err);
      setError('Erro ao converter texto para PDF.');
    }
  };

  return (
    <div className="section">
      <h2>Conversor de Texto para PDF</h2>
      <textarea
        rows="10"
        placeholder="Digite o texto aqui..."
        value={text}
        onChange={handleTextChange}
      />
      <button onClick={handleSubmit}>Converter para PDF</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default TextToPdf;
