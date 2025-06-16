import InputField from '../components/InputField'
import BackButton from '../components/BackButton';
import SubmitButton from '../components/SubmitButton';

function BuscarProdutos(){
    return(
        <div>
            <h1>Buscar produtos</h1>
            <h2>Insira o codigo do produto</h2>
            <div className='codigo'>
                <InputField label="Codigo" id="Codigo" type='number'/>
            </div>
            <div className="botoes">
                <SubmitButton/>
                <BackButton/>
            </div>
        </div>
    )
}

export default BuscarProdutos;

