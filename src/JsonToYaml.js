import React, { useState } from 'react';
import axios from 'axios';

function JsonToYaml({ jsonData }) {
  const [yamlData, setYamlData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmitJsonToYaml = async () => {
    if (!jsonData) {
      setError("Não há dados JSON para converter.");
      return;
    }

    try {
      const response = await axios.post('https://teste-api-xyu9.shuttle.app/json_to_yaml', JSON.stringify(jsonData), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setYamlData(response.data);  // Atualiza o estado com os dados YAML convertidos
      setError(null);
    } catch (err) {
      console.error('Erro ao converter JSON para YAML:', err);
      setError('Erro ao converter JSON para YAML.');
    }
  };

  return (
    <div>
      <h3>Converter JSON para YAML</h3>
      <button onClick={handleSubmitJsonToYaml}>Converter JSON para YAML</button>

      {yamlData && (
        <div>
          <h3>Dados Convertidos para YAML:</h3>
          <pre>{yamlData}</pre>
        </div>
      )}

      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default JsonToYaml;
