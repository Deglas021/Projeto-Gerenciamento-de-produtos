function ProductList({ produtos, onEdit }) {
  return (
    <table className="productList">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Valor</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {produtos.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              Nenhum produto encontrado.
            </td>
          </tr>
        ) : (
          produtos.map((produto, index) => (
            <tr key={produto.id || index}>
              <td>{produto.id || index + 1}</td>
              <td>{produto.nome}</td>
              <td>R$ {produto.preco.toFixed(2)}</td>
              <td>{produto.quantidade}</td>
              <td>
                {onEdit && (
                  <button onClick={() => onEdit(produto)}>Editar</button>
                )}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ProductList;
