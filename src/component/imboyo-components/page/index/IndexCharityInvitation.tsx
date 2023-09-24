/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Theme, useTheme } from "@mui/material";
import _IndexCharityInvitationHeading from "./_IndexCharityInvitationHeading";
import Image from "next/image";

const IndexCharityInvitation = () => {
  const theme = useTheme();

  return (
    <section css={styles.container(theme)}>
      <_IndexCharityInvitationHeading />

      {/* QRIS Image */}
      <div css={styles.QRISImage.container}>
        <Image
          src="/Donasi/assets/assets/images/qris.jpg"
          alt="QRIS"
          width={0}
          height={0}
          quality={100}
          sizes={"100vw"}
          css={styles.QRISImage.img}
        />
      </div>
    </section>
  );
};
export default IndexCharityInvitation;

// Region: Styles
const styles = {
  container: (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${theme.palette.primaryRed.main};
    padding: 3rem 1rem;
  `,

  QRISImage: {
    container: css`
      position: relative;
      margin-top: 3rem;
      max-width: 400px;
    `,
    img: css`
      object-fit: cover;
      width: 100%;
      height: auto;
    `,
  },
};
