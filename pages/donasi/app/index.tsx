/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import IndexChoosenActivites from "../../../src/component/imboyo-components/page/index/IndexChoosenActivites";
import IndexCategoryListByCategory from "../../../src/component/imboyo-components/page/index/IndexCategoryListByCategory";
import IndexCharityInvitation from "../../../src/component/imboyo-components/page/index/IndexCharityInvitation";
import IndexTargetCharity from "../../../src/component/imboyo-components/page/index/IndexTargetCharity";
import IndexCarousel from "../../../src/component/imboyo-components/page/index/IndexCarousel";
import DonationLayout from "../../../src/component/imboyo-components/DonationLayout";

export default function HomePage() {
  return (
    <DonationLayout>
      <section css={styles.mainSection}>
        <IndexCarousel />
        <IndexTargetCharity />
        <IndexChoosenActivites />
        <IndexCategoryListByCategory />
      </section>

      <section css={styles.footerSection}>
        <IndexCharityInvitation />
      </section>
    </DonationLayout>
  );
}

const styles = {
  mainSection: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 3rem;
    padding: 0 1rem;
  `,

  footerSection: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  `,
};
