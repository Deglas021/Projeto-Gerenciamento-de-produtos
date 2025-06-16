import ProductList from "../components/ProductList";
import SubmitButton from "../components/SubmitButton";
import BackButton from "../components/BackButton";

function AtualizarProdutos(){
    return(
        <div>
            <h1>AtualizarProdutos</h1>
            <ProductList />
            <div className="botoes">
                <SubmitButton/>
                <BackButton />
            </div>
      </div>
    );
};

export default AtualizarProdutos;