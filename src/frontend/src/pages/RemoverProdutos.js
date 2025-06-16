import ProductList from "../components/ProductList";
import BackButton from "../components/BackButton";

function RemoverProdutos(){
    return(
        <>
        <h1>
            RemoverProdutos
        </h1>
        <ProductList/>
        <div className="botoes">
            <BackButton/>
        </div>
        </>
    )
}

export default RemoverProdutos;