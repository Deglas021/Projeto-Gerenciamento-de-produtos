import BackButton from "../components/BackButton.js";
import InputField from "../components/InputField.js";
import SubmitButton from "../components/SubmitButton.js";
import axios from "axios";
import { useState } from "react";

function AdicionarProdutos() {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const produto = {
      nome,
      quantidade: Number(quantidade),
      preco: Number(preco),
    };

    try {
      const response = await axios.post("http://localhost:8080/products", produto);
      console.log("Produto adicionado:", response.data);

      setNome("");
      setQuantidade("");
      setPreco("");
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  return (
    <div>
      <h2>Formulário de preenchimento</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <InputField
            label="Nome do produto:"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <InputField
            label="Quantidade do produto:"
            id="quantidade"
            type="number"
            className="menor"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />
          <InputField
            label="Preço do produto:"
            id="preco"
            type="number"
            step="0.01"
            className="menor"
            placeholder="R$"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
        <SubmitButton />
        <BackButton />
      </form>
    </div>
  );
}

export default AdicionarProdutos;
