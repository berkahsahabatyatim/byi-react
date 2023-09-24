/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { grey } from "@mui/material/colors";

const DetailCampaignDetail = () => {
  return (
    <section css={styles.container}>
      <p>Campaign</p>
      <h4>Informasi Program</h4>
      <p css={styles.description}>
        Yayasan Berkah Yatim Indonesia menerima & menyalurkan Zakat Fidyah
      </p>
    </section>
  );
};
export default DetailCampaignDetail;

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    border: 1px solid #e0e0e0;
    border-radius: 1rem;

    padding: 1rem;
  `,

  description: css`
    color: ${grey[600]};
    font-size: 0.75rem;
  `,
};
