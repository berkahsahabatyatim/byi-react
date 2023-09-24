/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { css } from "@emotion/react";
import theme from "../../../theme-registry/theme";
import Link from "next/link";
import { ButtonBase } from "@mui/material";

interface PropsType {
  label: string;
  image: string;
  href: string;
}

const _IndexTargetCharityItem = (props: PropsType) => {
  return (
    <Link href={props.href} css={styles.wrapper}>
      <ButtonBase>
        <div css={styles.image.wrapper} className="image-wrapper">
          <Image
            src={props.image}
            alt="charity"
            width={28}
            height={28}
            css={styles.image.image}
          />
        </div>
      </ButtonBase>
      <p css={styles.label}>{props.label}</p>
    </Link>
  );
};
export default _IndexTargetCharityItem;

// Region: Styles
const styles = {
  wrapper: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
    textDecoration: "none",

    transition: "all 0.5s ease-in-out",

    "&:hover": {
      ".image-wrapper": {
        backgroundColor: theme.palette.error.main,
        transition: "all 0.25s ease-in-out",
      },

      p: {
        textDecoration: "underline",
        color: theme.palette.primaryRed.main,
      },
    },
  }),

  image: {
    wrapper: css({
      position: "relative",
      backgroundColor: theme.palette.primaryRed.main,
      padding: "1.75rem",
      borderRadius: "50%",
    }),

    image: css({
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#FFFFFF",
    }),
  },

  label: css({
    margin: 0,
    color: theme.palette.grey[800],
  }),
};
