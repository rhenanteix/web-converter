import React, { useState } from 'react';
import axios from 'axios';

function CsvToJson() {
  const [csvData, setCsvData] = useState('');
  const [jsonData, setJsonData] = useState(null);
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
      const response = await axios.post('http://127.0.0.1:8080/csv_to_json', csvData, {
        headers: {
          'Content-Type': 'text/plain',
        },
      });
      setJsonData(response.data);
      setError(null);
    } catch (err) {
      console.error('Erro ao converter CSV para JSON:', err);
      setError('Erro ao converter CSV para JSON.');
    }
  };

  return (
    <div className="section">
      <h2>Conversor de CSV para JSON</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Converter para JSON</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {jsonData && (
        <div>
          <h3>Dados Convertidos:</h3>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default CsvToJson;
