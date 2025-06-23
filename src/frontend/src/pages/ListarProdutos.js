import BackButton from "../components/BackButton";
import ProductList from "../components/ProductList";
import axios from "axios";
import { useState, useEffect } from "react";

function ListarProdutos() {
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

  if (loading) return <p>Carregando produtos...</p>;

  return (
    <div>
      <h1>Listar Produtos</h1>
      <ProductList produtos={produtos} />
      <div className="botoes">
        <BackButton />
      </div>
    </div>
  );
}

export default ListarProdutos;
