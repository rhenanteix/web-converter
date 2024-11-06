import React from 'react';
import CsvToJson from './CsvToJson';
import TextToMarkdown from './TextToMarkdown';
import './App.css';  // Certifique-se de que o CSS está sendo importado


function App() {
  return (
    <div className="App">
      <header>
        {/* Substituindo o título por uma imagem */}
      </header>
      
      <h1>One Conversion</h1>
      
      <div className="container">
        <CsvToJson />
        <TextToMarkdown />
      </div>
    </div>
  );
}

export default App;
