import BackButton from "../components/BackButton";
import ProductList from "../components/ProductList";

function ListarProdutos() {
  return (
    <div>
      <h1>Listar Produtos</h1>
      <ProductList />
      <div className="botoes">
      <BackButton />
      </div>
    </div>
  );
}

export default ListarProdutos;
  