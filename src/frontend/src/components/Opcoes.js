import { Link } from "react-router-dom";

function Opcoes() {
  return (
    <div className="botoes">
        <Link to="/adicionar" className="button">Adicionar produtos</Link>
        <Link to="/listar" className="button">Listar produtos</Link>
        <Link to="/atualizar" className="button">Atualizar produtos</Link>
        <Link to="/remover" className="button">Remover produtos</Link>
        <Link to="/buscar" className="button">Buscar produtos</Link>
    </div>
  );
}

export default Opcoes;