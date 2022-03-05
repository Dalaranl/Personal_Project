import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";
import { Maybe } from "../../../../commons/types/generated/types";

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
`;

interface IProps {
  type: string;
  register: UseFormRegisterReturn;
  defaultValue?: (string | undefined) | (Maybe<number> | undefined);
  maxLength?: number;
}

export default function FullSizeFormInput(props: IProps) {
  return (
    <Input
      type={props.type}
      {...props.register}
      defaultValue={props.defaultValue || ""}
      maxLength={props.maxLength}
    />
  );
}
