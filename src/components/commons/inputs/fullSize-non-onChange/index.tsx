import styled from "@emotion/styled";
import { Maybe } from "graphql/jsutils/Maybe";
import { ChangeEvent } from "react";

const Input = styled.input`
  width: 100%;
  height: 100%;

  background-color: rgba(120, 120, 120, 0.9);
  border-radius: 10px;

  padding: 20px;
  border: none;

  font-size: 1.5rem;
  color: white;

  :hover {
    background-color: rgba(80, 80, 80, 0.9);
  }

  :focus {
    outline: none;
  }

  ::placeholder {
    color: aliceblue;
  }
`;

interface IProps {
  type: string;
  name: string;
  defaultValue?: (Maybe<string[]> | undefined) | string | number;
  placeholder: string;
  readOnly: boolean;
}

export default function FullSizeInputNonOnchange(props: IProps) {
  return (
    <Input
      type={props.type}
      name={props.name}
      readOnly={props.readOnly}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue || ""}
    />
  );
}
