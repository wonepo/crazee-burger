import React from "react";
import styled from "styled-components";

type ButtonProps = React.ComponentProps<"button"> & {
  label: string;
  iconbefore?: JSX.Element;
  iconafter?: JSX.Element;
};

export default function Button(props: ButtonProps) {
  return (
    <ButtonStyled {...props}>
      {props.iconbefore}
      <p>{props.label}</p>
      {props.iconafter}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 53px;
  width: 100%;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.primary_burger};
  background-color: ${(props) => props.theme.colors.primary_burger};
  gap: 12px;

  &:hover {
    color: ${(props) => props.theme.colors.primary_burger};
    border: 1px solid ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.white};
    cursor: pointer;
  }
`;
