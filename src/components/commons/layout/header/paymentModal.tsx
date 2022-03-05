import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Payment from "./payment";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 400,
  bgcolor: "#33363d",
  border: "none",
  boxShadow: 24,
  p: 4,
};

interface IProps {
  modal: boolean;
  handleClose: () => void;
}

export default function PaymentModal(props: IProps) {
  return (
    <div>
      <Modal
        open={props.modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Payment handleClose={props.handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
