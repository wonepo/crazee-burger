import { useParams } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/Logo";
import { FaPerson } from "react-icons/fa6";
import RigthHeader from "./RigthHeader";

export default function OrderPage() {
  const { username } = useParams();

  /*const navigate = useNavigate();
  const handleClick = () => {
    navigate("/order");
  };*/

  return (
    <OrderPageStyled>
      <header>
        <a href={location.pathname}>
          <Logo />
        </a>
        <RigthHeader icon={<FaPerson />} username={username} />
      </header>
      <main></main>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${(props) => props.theme.colors.primary_burger};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    padding: 0px 5px 0px 5px;

    background-color: ${(props) => props.theme.colors.white};

    a:active,
    a:visited,
    a:hover,
    a:link {
      color: none;
      text-decoration: none;
    }

    & > a {
      cursor: pointer;
      & > div {
        scale: 0.5;

        :nth-child(1) {
          display: none;
        }
        :nth-child(3) {
          display: none;
        }
      }
    }
  }

  & > main {
    background-color: ${(props) => props.theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    height: 100%;
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    & > header {
      padding: 0px 10px 0px 10px;
      border-radius: 15px 15px 0px 0px;

      & > a > div {
        scale: 1;
        :nth-child(1) {
          display: block;
        }
        :nth-child(3) {
          display: block;
        }
      }
    }

    & > main {
      border-radius: 0px 0px 15px 15px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    padding: 24px 0px;

    & > header,
    & > main {
      width: 1400px;
    }

    & > header {
      height: 100px;
      padding: 0px 70px 0px 20px;
    }

    & > main {
      height: 835px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.xl}) {
    & > main {
      height: 910px;
    }
  }
`;
