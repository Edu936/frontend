import { useState } from "react";
import "./App.css";

function App() {

  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function chamarAPI() {
    setCarregando(true);

    try {
      const resposta = await fetch("http://localhost:8080/teste");

      if (!resposta.ok) {
        throw new Error("Erro na requisição");
      }

      const dados = await resposta.text();

      setMensagem(dados);
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao conectar com API");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div>
      <h1>Frontend React + API em Java</h1>

      <button onClick={chamarAPI}>Chamar API</button>

      <p>{carregando ? "Carregando...." : mensagem}</p>
    </div>
  );
}

export default App;
