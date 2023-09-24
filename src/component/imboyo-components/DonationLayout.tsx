/** @jsxImportSource @emotion/react */
"use client";
import { ReactNode } from "react";
import ThemeRegistry from "../theme-registry/ThemeRegistry";
import {css} from "@emotion/react";

interface PropsType {
  children: ReactNode;
}

const DonationLayout = (props: PropsType) => {
  return (
    <ThemeRegistry>
      <div css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 100px;
      `}>{props.children}</div>
    </ThemeRegistry>
  );
};
export default DonationLayout;
