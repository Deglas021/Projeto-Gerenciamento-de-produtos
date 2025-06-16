import { Link } from "react-router-dom";

function BackButton({ to = "/" }) {
  return (
    <Link to={to} className="button">
      Voltar
    </Link>
  );
}

export default BackButton;
