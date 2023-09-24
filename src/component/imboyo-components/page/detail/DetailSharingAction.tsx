/** @jsxImportSource @emotion/react */
"use client";
import { Button } from "@mui/material";
import { css } from "@emotion/react";
import ShareIcon from "@mui/icons-material/Share";
import CallIcon from "@mui/icons-material/Call";

const DetailSharingAction = () => {
  return (
    <section css={styles.container}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        startIcon={<ShareIcon />}
        css={styles.button}
      >
        Bagikan
      </Button>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        startIcon={<CallIcon />}
        css={styles.button}
      >
        Hubungi Kami
      </Button>
    </section>
  );
};
export default DetailSharingAction;

// Region: Styles
const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  `,

  button: css`
    text-transform: capitalize;
  `,
};
