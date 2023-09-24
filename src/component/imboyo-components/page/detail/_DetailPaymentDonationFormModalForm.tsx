/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import {
  Button,
  Checkbox,
  TextareaAutosize,
  TextField,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";

const _DetailPaymentDonationFormModalForm = () => {
  const theme = useTheme();

  return (
    <form css={styles.container}>
      {/* Nama Lengkap Field */}
      <TextField
        label="Nama Lengkap"
        variant="outlined"
        margin="dense"
        fullWidth
      >
        Nama Lengkap
      </TextField>

      {/* Telepon Field */}
      <TextField
        label="Telepon"
        variant="outlined"
        margin="dense"
        inputMode="tel"
        type="number"
        fullWidth
      >
        Telepon
      </TextField>

      {/* Sembunyikan  */}
      <div css={styles.container}>
        <Checkbox color="primary" />
        <Typography variant="body2">
          Sembunyikan Nama Saya (Donasi Anonim)
        </Typography>
      </div>

      <TextareaAutosize
        placeholder="Pesan/Titip Doa"
        minRows={4}
        css={styles.textAreaInput(theme)}
      />

      <div css={styles.agreementContainer}>
        <Checkbox color="primary" />
        <Typography variant="body2">
          Saya menyatakan dana yang didonasikan melalui Yayasan Berkah Yatim
          Indonesia bukan bersumber dan bertujuan pencucian uang (money
          laundry), terorisme, maupun tindak kejahatan lainnya
        </Typography>
      </div>

      <Button variant="contained" fullWidth css={styles.submitButton(theme)}>
        Submit Data
      </Button>
    </form>
  );
};
export default _DetailPaymentDonationFormModalForm;

// Region: Styles
const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,

  anonimActionContainer: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  textAreaInput: (theme: Theme) => css`
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${theme.palette.grey[400]};

    &:focus {
      outline: none;
      border: 2px solid ${theme.palette.primary.main};
    }
  `,

  agreementContainer: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  submitButton: (theme: Theme) => css`
    background-color: ${theme.palette.teal.main};

    &:hover {
      background-color: ${theme.palette.teal.dark};
    }
  `,
};
