import { useNavigate, useParams } from "react-router-dom";

export default function OrderPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Bonjour {id}</h1>
      <button onClick={handleClick}>Déconnexion</button>
    </div>
  );
}
