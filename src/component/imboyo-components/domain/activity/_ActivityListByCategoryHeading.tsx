/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import StarIcon from "@mui/icons-material/Star";
import {Theme, useTheme} from "@mui/material";
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const _ActivityListByCategoryHeading = (props: PropsType) => {
  const theme = useTheme();

  return (
    <div
      css={styles.wrapper}
    >
      <StarIcon
        css={styles.icon(theme)}
      />
      <h3>{props.children}</h3>
    </div>
  );
};
export default _ActivityListByCategoryHeading;

// Region: Styles
const styles = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  icon: (theme: Theme) => css`
    color: ${theme.palette.primaryRed.main};
    width: 50px;
    height: 50px;
    text-align: center;
  `
}