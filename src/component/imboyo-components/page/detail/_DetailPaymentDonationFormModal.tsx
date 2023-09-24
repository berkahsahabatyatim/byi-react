/** @jsxImportSource @emotion/react */
"use client";
import { IconButton, Modal, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import { css } from "@emotion/react";
import ClearIcon from "@mui/icons-material/Clear";
import { grey } from "@mui/material/colors";
import _DetailPaymentDonationFormModalHeading from "./_DetailPaymentDonationFormModalHeading";
import _DetailPaymentDonationFormModalForm from "./_DetailPaymentDonationFormModalForm";

interface PropsType {
  isOpen: boolean;
  onButtonClose: () => void;
}

const _DetailPaymentDonationFormModal = (props: PropsType) => {
  return (
    <Modal open={props.isOpen}>
      <Box css={styles.modalBox}>
        {/* Close Button in right top its fixed even scrolling */}
        <IconButton css={styles.closeButton} onClick={props.onButtonClose}>
          <ClearIcon />
        </IconButton>

        <_DetailPaymentDonationFormModalHeading
          title="Pembayaran"
          subtitle="Lengkapi Data di Bawah Ini"
        />

        {/* Form */}
        <div css={styles.formSection.container}>
          <Typography variant="h6" color={grey[900]}>
            Data Donatur
          </Typography>

          <_DetailPaymentDonationFormModalForm />
        </div>
      </Box>
    </Modal>
  );
};
export default _DetailPaymentDonationFormModal;

const styles = {
  modalBox: css`
    position: absolute;
    top: 0;
    left: 0;

    // Full Width & Height
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    background-color: white;
  `,

  closeButton: css`
    position: fixed;
    top: 10px;
    right: 10px;
    color: ${grey[700]};
    background-color: ${grey[300]};
  `,

  formSection: {
    container: css`
      padding: 1rem;
    `,
  },
};
