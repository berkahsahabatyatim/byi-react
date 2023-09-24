/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { grey } from "@mui/material/colors";

const _DetailPaymentDonationHeading = () => {
  return (
    <div css={styles.container}>
      <h3>Donasi Sekarang</h3>
      <p css={styles.description}>
        Mari berdonasi dengan cerdas untuk mencerdaskan bangsa
      </p>
    </div>
  );
};
export default _DetailPaymentDonationHeading;

// Region: Styles
const styles = {
  container: css`
    text-align: center;
  `,

  description: css`
    font-size: 0.75rem;
    line-height: 0.75rem;
    color: ${grey[600]};
  `,
};
