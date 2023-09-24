/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import _IndexChoosenActivitesCarousel from "./_IndexChoosenActivitesCarousel";

const IndexChoosenActivites = () => {
  return (
    <section css={styles.section}>
      <h3>Program Pilihan</h3>
      <_IndexChoosenActivitesCarousel />
    </section>
  );
};
export default IndexChoosenActivites;

// Region: Styles
const styles = {
  section: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
    width: "100%",
  }),
};
