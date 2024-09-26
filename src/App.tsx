import "./App.css";
import { Card } from "./components/Card";

// PascalCase
// camelCase
// kebab-case
// snake_case

function App() {
  return (
    //JSX => um JAVASCRIPT QUE PARECE COM HTML
    <div className="container">
      <Card
        imageUrl="https://static.vecteezy.com/ti/fotos-gratis/t2/48915102-feminino-graca-deslumbrante-mulher-abracando-natural-beleza-e-eterno-estilo-gratis-foto.jpeg"
        name="Maria"
      />

      <Card
        imageUrl="https://media.istockphoto.com/id/1142003972/pt/foto/side-portrait-of-laughing-african-american-man-looking-up.jpg?s=612x612&w=0&k=20&c=8hGfrQLKfgm9fZCWQpKQRw1I9Kbk1sGVQXZQCNwoyyQ="
        name="José"
      />
    </div>
  );
}

export default App;
