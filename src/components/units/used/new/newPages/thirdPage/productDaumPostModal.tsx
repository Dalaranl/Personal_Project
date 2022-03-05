import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DaumPostcode from "react-daum-postcode";
import { useCreateUsedItem } from "../../../../../commons/hooks/useCreateUseItem";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 520,
  bgcolor: "#1f2024",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IProps {
  isDaumPost: boolean;
  onClickDaumPost: () => void;
}

export default function ProductDaumPostModal(props: IProps) {
  const { onChangeAddress } = useCreateUsedItem();

  const onCompletDaumPostcomde = (data: any) => {
    onChangeAddress(String(data.address), String(data.zonecode));
    props.onClickDaumPost();
  };

  return (
    <div>
      <Modal
        open={props.isDaumPost}
        onClose={props.onClickDaumPost}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DaumPostcode
            onComplete={onCompletDaumPostcomde}
            style={{ height: "100%" }}
          />
        </Box>
      </Modal>
    </div>
  );
}
