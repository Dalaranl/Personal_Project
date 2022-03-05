import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { CreateProductContext } from "../../../../../../pages/used/new";

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

export default function BasicContextModal() {
  const { openModal, setOpenModal, modalMessage } =
    useContext(CreateProductContext);
  const message = modalMessage;

  const modalClose = () => {
    if (setOpenModal) setOpenModal(false);
  };

  return (
    <div>
      <Modal
        open={openModal || false}
        onClose={modalClose}
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
            Message
          </Typography>
          <Typography
            style={{ color: "rgba(255,255,255,0.8)" }}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            {message}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
