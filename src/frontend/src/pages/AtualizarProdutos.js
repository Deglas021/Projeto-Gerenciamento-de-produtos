import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/SubmitButton";

function AtualizarProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    preco: "",
    quantidade: "",
  });

  useEffect(() => {
    fetchProdutos();
  }, []);

  async function fetchProdutos() {
    try {
      const res = await axios.get("http://localhost:8080/products");
      setProdutos(res.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);
    }
  }

  function abrirFormulario(produto) {
    setProdutoSelecionado(produto);
    setFormData({
      nome: produto.nome,
      preco: produto.preco,
      quantidade: produto.quantidade,
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/products/${produtoSelecionado.id}`, {
        nome: formData.nome,
        preco: parseFloat(formData.preco),
        quantidade: parseInt(formData.quantidade, 10),
      });
      alert("Produto atualizado com sucesso!");
      setProdutoSelecionado(null);
      fetchProdutos();
    } catch (error) {
      alert("Erro ao atualizar produto");
      console.error(error);
    }
  }

  if (loading) return <p>Carregando produtos...</p>;

  return (
    <div>
      <h1>Atualizar Produtos</h1>

      {!produtoSelecionado ? (
        <>
          <ProductList produtos={produtos} onEdit={abrirFormulario} />
          <div className="botoes" style={{ marginTop: "10px" }}>
            <BackButton />
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Editar Produto: {produtoSelecionado.nome}</h2>

          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label>
            Preço:
            <input
              type="number"
              step="0.01"
              name="preco"
              value={formData.preco}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label>
            Quantidade:
            <input
              type="number"
              name="quantidade"
              value={formData.quantidade}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <SubmitButton />
          <BackButton onClick={() => setProdutoSelecionado(null)} style={{ marginLeft: "10px" }} />
        </form>
      )}
    </div>
  );
}

export default AtualizarProdutos;
