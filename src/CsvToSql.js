import React, { useState } from 'react';
import axios from 'axios';

function CsvToSql() {
  const [csvData, setCsvData] = useState('');
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCsvData(reader.result);
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://teste-api-xyu9.shuttle.app/csv_to_sql', csvData, {
        headers: {
          'Content-Type': 'text/plain',
        },
        responseType: 'blob', // Indica que a resposta será um blob (arquivo)
      });

      // Criar um link temporário para download do arquivo SQL
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'output.sql'); // Nome do arquivo para download
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      setError(null);
    } catch (err) {
      console.error('Erro ao converter CSV para SQL:', err);
      setError('Erro ao converter CSV para SQL.');
    }
  };

  return (
    <div className="section">
      <h2>Conversor de CSV para SQL</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Converter para SQL e Baixar</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default CsvToSql;
