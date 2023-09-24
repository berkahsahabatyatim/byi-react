/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { numToCurrencyFormat } from "../../../../../utils/num-to-currency-format";
import { LinearProgress, Theme, useTheme } from "@mui/material";

interface PropsType {
  collected: number;
  target: number;
}

const _DetailPaymentHeading = (props: PropsType) => {
  const theme = useTheme();

  // Calculate the percentage of the donation. Dont let it be more than 100%. cache it with hook. only update when props change
  const percentage = Math.min((props.collected / props.target) * 100, 100);

  return (
    <div css={styles.container}>
      <h3 css={styles.label(theme)}>Rp. {numToCurrencyFormat(props.collected)}</h3>

      <div css={styles.content.container}>
        <p css={styles.content.label}>
          Terkumpul {numToCurrencyFormat(1000000)} dari{" "}
          <span>{numToCurrencyFormat(5000000)}</span>
        </p>

        <LinearProgress
          variant="determinate"
          value={percentage}
          css={styles.content.linearProgress}
        />
      </div>
    </div>
  );
};
export default _DetailPaymentHeading;

// Region: Styles
const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,

  label: (theme: Theme) => css`
    text-align: start;
    color: ${theme.palette.primary.main};
    font-size: 1.5rem;
    font-weight: 600;
  `,

  content: {
    container: css`
      display: flex;
      flex-direction: column;
    `,

    label: css`
      font-size: 0.75rem;

      span {
        font-weight: bold;
      }
    `,

    linearProgress: css`
      width: 100%;
      height: 0.25rem;
      border-radius: 0.25rem;
      margin-top: 1rem;
    `,
  },
};
