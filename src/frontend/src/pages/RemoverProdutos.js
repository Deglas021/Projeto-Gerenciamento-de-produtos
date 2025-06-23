import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import BackButton from "../components/BackButton";
import axios from "axios";

function RemoverProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await axios.get("http://localhost:8080/products");
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProdutos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/products/${id}`);
      setProdutos(produtos.filter((produto) => produto.id !== id));
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  };

  if (loading) return <p>Carregando produtos...</p>;

  return (
    <>
      <h1>Remover Produtos</h1>
      <ProductList produtos={produtos} onDelete={handleDelete} />
      <div className="botoes">
        <BackButton />
      </div>
    </>
  );
}

export default RemoverProdutos;
