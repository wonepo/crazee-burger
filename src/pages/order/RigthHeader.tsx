import { Link } from "react-router-dom";
import styled from "styled-components";

type RigthHeaderProps = React.ComponentProps<"div"> & {
  username?: string;
  icon?: JSX.Element;
};

export default function RigthHeader(props: RigthHeaderProps) {
  return (
    <RigthHeaderStyled>
      <div>
        <p>
          Hey, <span>{props.username}</span>
        </p>
        <Link to={"/"}>Se déconnecter</Link>
      </div>
      {props.icon}
    </RigthHeaderStyled>
  );
}

const RigthHeaderStyled = styled.div`
  height: 44px;
  padding: 4px 0px;
  color: ${(props) => props.theme.colors.greyBlue};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  svg {
    height: 36px;
    width: 36px;
  }

  & > div {
    font-family: "Open Sans";

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > p {
      font-size: 16px;
      line-height: 22px;
      text-align: right;
      min-width: 100%;
      font-weight: 500;

      span {
        color: ${(props) => props.theme.colors.primary_burger};
        font-weight: 700;
      }
    }

    & > a {
      display: block;
      font-size: 10px;
      color: ${(props) => props.theme.colors.greyBlue};
    }
  }
`;
