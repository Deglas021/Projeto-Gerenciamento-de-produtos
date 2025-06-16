import ProductList from "../components/ProductList";
import BackButton from "../components/BackButton";

function AtualizarProdutos(){
    return(
        <div>
            <h1>AtualizarProdutos</h1>
            <ProductList />
            <div className="botoes">
                <BackButton />
            </div>
      </div>
    );
};

export default AtualizarProdutos;