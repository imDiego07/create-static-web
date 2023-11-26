// App.js
import React, { useState } from 'react'; // Importa App como una exportación nombrada
import analyzeImage from './azure-image-analysis';


// Primer componente de función (App)
function App() {
  // Estados para almacenar la URL de la imagen y el mensaje de la imagen
  const [imageUrl, setImageUrl] = useState(''); // Estado para la URL de la imagen
  const [imageMessage, setImageMessage] = useState(''); // Estado para el mensaje de la imagen

  // Función para manejar el análisis de la imagen (por implementar)
  const handleImageAnalysis = () => {
    // Implementar la lógica de análisis de imagen aquí
    // Puedes utilizar los valores de imageUrl e imageMessage
    console.log('Análisis de Imagen');
  };

  // Función para manejar la generación de la imagen (por implementar)
  const handleImageGeneration = () => {
    // Implementar la lógica de generación de imagen aquí
    // Puedes utilizar los valores de imageUrl e imageMessage
    console.log('Generación de Imagen');
  };

  return (
    <div className="app">
      <h1>Aplicación de Análisis de Imágenes</h1>

      <div>
        <label>URL de la Imagen:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>

      <div>
        <label>Mensaje de la Imagen:</label>
        <input
          type="text"
          value={imageMessage}
          onChange={(e) => setImageMessage(e.target.value)}
        />
      </div>

      <button onClick={handleImageAnalysis}>Analizar Imagen</button>
      <button onClick={handleImageGeneration}>Generar Imagen</button>
    </div>
  );
}
export default App;

// Segundo componente de función (AnalyzeImage)
const AnalyzeImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [results, setResults] = useState(null);

  const subscriptionKey = '4db32c3cac3144d38892a6435014fd46'; // Reemplaza con tu clave de suscripción
  const endpoint = 'https://ia-web.cognitiveservices.azure.com/'; // Reemplaza con tu punto de extensión

  const handleAnalyze = async () => {
    try {
      // Llama a la función de análisis de imagen
      const analysisResults = await analyzeImage(imageUrl, subscriptionKey, endpoint);
      setResults(analysisResults);
    } catch (error) {
      // Maneja errores
      setResults(null);
    }
  };

  const DisplayResults = () => {
    // Implementa la lógica para mostrar los resultados en tu interfaz de usuario
    // Puedes acceder a 'results' para obtener la respuesta de la API de Azure

    return (
      <div>
        <h2>Resultados del Análisis:</h2>
        {/* Mostrar los resultados según tu lógica */}
      </div>
    );
  };

  return (
    <div>
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      <button onClick={handleAnalyze}>Analyze</button>
      {results && <DisplayResults />}
    </div>
  );
};

export { App, AnalyzeImage };
