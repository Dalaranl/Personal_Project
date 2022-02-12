import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 800,
  bgcolor: "#1f2024",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IProps {
  isClick: boolean;
  clickId: string;
  handleClose: () => void;
}

export default function GiphyModal(props: IProps) {
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={props.isClick}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{
              color: "rgba(255,255,255,0.8)",
              height: "100%",
              width: "100%",
            }}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <img src={props.clickId} style={{ height: "95%", width: "100%" }} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
