import React, { useState } from 'react';
import axios from 'axios';

function TextToMarkdown() {
  const [textData, setTextData] = useState('');
  const [markdownResult, setMarkdownResult] = useState('');
  const [error, setError] = useState(null);

  const handleTextChange = (event) => {
    setTextData(event.target.value);
  };

  const handleTextSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8080/text_to_markdown', textData, {
        headers: {
          'Content-Type': 'text/plain', // Garantir que o conteúdo enviado seja texto simples
        },
      });

      console.log('Response:', response.data); // Verificar a resposta
      console.log('uiui', markdownResult)

      // A resposta do servidor deve ter o campo "text" com o HTML convertido
      setMarkdownResult(response.data); // Atualizar o estado com o HTML convertido
      setError(null); // Limpar qualquer erro anterior
    } catch (err) {
      console.error('Erro ao converter texto para Markdown:', err);
      setError('Erro ao converter texto para Markdown.'); // Exibir mensagem de erro caso haja algum problema
    }
  };

  return (
    <div className="section">
      <h2>Conversor de Texto para Markdown</h2>
      
      <textarea
        rows="10"
        cols="50"
        value={textData}
        onChange={handleTextChange}
        placeholder="Insira o texto para conversão"
      />
      
      <button onClick={handleTextSubmit}>Converter para Markdown</button>
      
      {error && <div style={{ color: 'red' }}>{error}</div>} {/* Exibe erro caso haja */}

      {markdownResult && (
        <div>
          <h3>Resultado Convertido:</h3>
          {/* Renderiza o conteúdo HTML convertido */}
          <div
            dangerouslySetInnerHTML={{
              __html: markdownResult, // Exibe o conteúdo HTML convertido
            }}
          />
        </div>
        
      )}
    </div>
  );
}

export default TextToMarkdown;
