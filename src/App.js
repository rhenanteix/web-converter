import React from 'react';
import CsvToJson from './CsvToJson';
import CsvToSql from './CsvToSql';
import TextToMarkdown from './TextToMarkdown';
import TextToPdf from './TextToPdf';  // Import the TextToPdf component


import './App.css';  // Certifique-se de que o CSS está sendo importado


function App() {
  return (
    <div className="App">
      <header>
        {/* Substituindo o título por uma imagem */}
      </header>
      
      <h1>ConvertFy</h1>
      
      <div className="container">
        <CsvToJson />
        <TextToPdf />  {/* Add the TextToPdf component here */}
        <CsvToSql/>

        {/* <TextToMarkdown /> */}
      </div>
    </div>
  );
}

export default App;
