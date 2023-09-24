/** @jsxImportSource @emotion/react */
"use client";
import { Theme, Typography, useTheme } from "@mui/material";
import { css } from "@emotion/react";

interface PropsType {
  title: string;
  subtitle: string;
}

const _DetailPaymentDonationFormModalHeading = (props: PropsType) => {
  const theme = useTheme();

  return (
    <div css={styles.container(theme)}>
      <Typography variant="h6" color="white">
        {props.title}
      </Typography>
      <Typography variant="body2" color="white">
        {props.subtitle}
      </Typography>
    </div>
  );
};
export default _DetailPaymentDonationFormModalHeading;

// Region: Styles
const styles = {
  container: (theme: Theme) => css`
    background-color: ${theme.palette.teal.main};
    padding: 50px 1rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
  `,
};
