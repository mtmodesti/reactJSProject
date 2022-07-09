import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Form from "../form";
import { motion } from "framer-motion";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "auto",
  bgcolor: "lightblue",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  minWidth: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: 4,
};

export default function RegisterModalForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open modal
      </Button>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form closeModalFunction={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
