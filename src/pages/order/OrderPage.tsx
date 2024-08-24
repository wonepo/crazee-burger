import { useNavigate, useParams } from "react-router-dom";

export default function OrderPage() {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Bonjour {username}</h1>
      <button onClick={handleClick}>Déconnexion</button>
    </div>
  );
}
