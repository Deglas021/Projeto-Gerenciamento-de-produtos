import InputField from '../components/InputField';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/SubmitButton';
import { useState } from 'react';
import axios from 'axios';

function BuscarProdutos() {
  const [codigo, setCodigo] = useState('');
  const [produto, setProduto] = useState(null);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBuscar = async (e) => {
    e.preventDefault();
    setProduto(null);
    setErro(null);
    setLoading(true);

    try {
      const response = await axios.get(`http://localhost:8080/products/${codigo}`);
      setProduto(response.data);
    } catch (error) {
      setErro('Produto não encontrado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Buscar Produtos</h1>
      <h2>Insira o código do produto</h2>

      <form onSubmit={handleBuscar}>
        <div className='codigo'>
          <InputField
            label="Código"
            id="codigo"
            type="number"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
        </div>
        <div className="botoes">
          <SubmitButton label="Buscar" />
          <BackButton />
        </div>
      </form>

      {loading && <p>Buscando produto...</p>}

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {produto && (
        <div className="produto-encontrado">
          <h3>Produto Encontrado:</h3>
          <p><strong>Nome:</strong> {produto.nome}</p>
          <p><strong>Valor:</strong> R$ {produto.preco.toFixed(2)}</p>
          <p><strong>Quantidade:</strong> {produto.quantidade}</p>
        </div>
      )}
    </div>
  );
}

export default BuscarProdutos;
