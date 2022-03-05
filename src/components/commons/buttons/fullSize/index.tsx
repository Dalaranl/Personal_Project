import styled from "@emotion/styled";

interface IProps {
  onClick: () => void | (() => Promise<void>) | Promise<void>;
  name: string;
}

const Button = styled.button`
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 10px;
  position: relative;

  font-size: 1.6rem;
  color: white;

  background: #a67dff;
  z-index: 1;

  :after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #9563ff;
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  :hover {
    color: #fff;
  }
  :hover:after {
    left: 0;
    width: 100%;
  }
  :active {
    top: 2px;
  }
`;

export default function FullSizeButton(props: IProps) {
  return (
    <Button className="btn" onClick={props.onClick}>
      {props.name}
    </Button>
  );
}
