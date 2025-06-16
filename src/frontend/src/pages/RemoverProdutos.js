import ProductList from "../components/ProductList";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/SubmitButton";

function RemoverProdutos(){
    return(
        <>
        <h1>
            RemoverProdutos
        </h1>
        <ProductList/>
        <div className="botoes">
            <SubmitButton/>
            <BackButton/>
        </div>
        </>
    )
}

export default RemoverProdutos;