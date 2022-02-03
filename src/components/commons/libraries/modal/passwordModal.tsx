import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ChangeEvent } from "react";
import styled from "@emotion/styled";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#1f2024",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Password = styled.input`
  width: 80%;
  height: 20px;

  padding: 20px;
  margin: 0px 10px 0px 5px;
  border-radius: 20px;
  border: none;

  font-size: 1.2rem;

  color: rgb(200, 200, 200);
  background-color: rgba(150, 150, 150, 0.8);

  :hover {
    background-color: rgba(120, 120, 120, 0.8);
  }
  :focus {
    outline: 1px solid rgba(80, 80, 80, 0.8);
  }
  ::placeholder {
    color: rgb(200, 200, 200);
  }
`;

const Submit = styled.button`
  width: 25%;
  height: 20%;

  font-size: 1.2rem;
  color: rgb(200, 200, 200);
  border-radius: 10px;
  background-color: rgba(150, 150, 150, 0.4);
  float: right;
  margin-top: 20px;

  :hover {
    background-color: rgba(150, 150, 150, 0.8);
  }
  :active {
    box-shadow: 3px 3px -3px black;
  }
`;

interface IProps {
  passModal: boolean;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  passModalClose: () => void;
}

export default function PasswordModal(props: IProps) {
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={props.passModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{ color: "rgba(255,255,255,0.8)" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            비밀번호를 입력하세요.
          </Typography>
          <Typography
            style={{ color: "rgba(255,255,255,0.8)" }}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <Password type="password" onChange={props.onChangePassword} />
            <Submit onClick={props.passModalClose}>확인</Submit>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
