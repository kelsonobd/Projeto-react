import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'

function App() {
  return (
    <div className="App">
      <SayMyName nome="Kelson" />
      <SayMyName nome="Theo" />
      <Pessoa
      nome ="Kelson"
      idade="28"
      profissao = "Desenvolvedor"
      foto = "https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
