/** @jsxImportSource @emotion/react */
import { numToCurrencyFormat} from "../../../../../utils/num-to-currency-format";
import { Button, LinearProgress } from "@mui/material";
import Link from "next/link";
import { css } from "@emotion/react";
import { grey, red } from "@mui/material/colors";
import theme from "../../../theme-registry/theme";

interface PropsType {
  title: string;
  target: number;
  collected: number;
  link: string;
  titleAlign?: "left" | "center" | "right";
}

const _ActivityCardContent = (props: PropsType) => {
  const percentage = Math.min((props.collected / props.target) * 100, 100);

  return (
    <div css={styles.wrapper}>
      <h4 css={styles.title(props.titleAlign || "center")}>{props.title}</h4>

      <div css={styles.subContainer.wrapper}>
        <p css={styles.subContainer.collected}>
          Terkumpul Rp. {numToCurrencyFormat(props.collected)}
        </p>

        <LinearProgress
          value={percentage}
          variant="determinate"
          color="error"
        />

        <p css={styles.subContainer.target}>
          Target Rp. {numToCurrencyFormat(props.target)}
        </p>

        <Link href={props.link}>
          <Button
            variant="contained"
            fullWidth
            css={styles.subContainer.linkButton}
            size={"small"}
          >
            Donasi Sekarang
          </Button>
        </Link>

        <p css={styles.subContainer.taxText}>Termasuk 10% Infak Operasional</p>
      </div>
    </div>
  );
};
export default _ActivityCardContent;

// Region: Styles
const styles = {
  wrapper: css({
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    flexGrow: 1,
  }),

  title: (titleAlign: "left" | "center" | "right") =>
    css({
      color: grey[900],
      fontWeight: "bold",
      textAlign: titleAlign,
    }),

  // Section
  subContainer: {
    wrapper: css({
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    }),

    collected: css({
      fontSize: "0.75rem",
      color: grey[700],
    }),

    target: css({
      fontSize: "0.75rem",
      color: grey[700],
      textAlign: "right",
    }),

    linkButton: css({
      backgroundColor: theme.palette.primaryRed.main,

      "&:hover": {
        backgroundColor: red[900],
      },
    }),

    taxText: css({
      fontSize: "0.75rem",
      color: grey[700],
    }),
  },
};
