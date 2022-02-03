import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DaumPostcode from "react-daum-postcode";

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

interface IProps {
  isDaumPost: boolean;
  SetIsDaumPost: () => void;
  onChangeAddress: (address: string, zonecode: string) => void;
}

export default function DaumPostModal(props: IProps) {
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  const onCompletDaumPostcomde = (data: any) => {
    props.onChangeAddress(String(data.address), String(data.zonecode));
    props.SetIsDaumPost();
  };

  return (
    <div>
      <Modal
        open={props.isDaumPost}
        onClose={props.SetIsDaumPost}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DaumPostcode onComplete={onCompletDaumPostcomde} />
        </Box>
      </Modal>
    </div>
  );
}
