import styled from "styled-components";

type TextfieldProps = React.ComponentProps<"input"> & {
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
};

export default function Textfield(props: TextfieldProps) {
  return (
    <TextStyled>
      {props.iconBefore}
      <input {...props} />
      {props.iconAfter}
    </TextStyled>
  );
}

const TextStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 53px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.white};
  padding: 0px 24px;
  gap: 12px;

  input:focus {
    outline: 1px solid ${(props) => props.theme.colors.greyLight};
  }

  input::placeholder {
    color: ${(props) => props.theme.colors.greyLight};
  }

  svg {
    color: ${(props) => props.theme.colors.greyBlue};
  }

  [type="text"] {
    color: ${(props) => props.theme.colors.greyBlue};
    height: 19px;
    border: 1px solid white;
    flex-grow: 1;
  }
`;
