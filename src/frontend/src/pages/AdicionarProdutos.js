import BackButton from "../components/BackButton.js";
import InputField from "../components/InputField.js"
import SubmitButton from "../components/SubmitButton.js";

function AdicionarProdutos() {
  return (
    <div>
      <h2>Formulário de preenchimento</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="campo">
            <InputField label="Nome do produto:" id="nome" />
            <InputField label="Quantidade do produto:" id="quantidade" type="number" className="menor" />
            <InputField label="Preço do produto:" id="preco" type="number" step="0.01" className="menor" placeholder="R$" />
        </div>
        <SubmitButton/>
        <BackButton/>
      </form>
    </div>
  );
}

export default AdicionarProdutos
