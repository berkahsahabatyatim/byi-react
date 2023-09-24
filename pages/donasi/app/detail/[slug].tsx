/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";
import DetailImageHero from "../../../../src/component/imboyo-components/page/detail/DetailImageHero";
import DetailPayment from "../../../../src/component/imboyo-components/page/detail/DetailPayment";
import DetailCampaignDetail from "../../../../src/component/imboyo-components/page/detail/DetailCampaignDetail";
import DetailSharingAction from "../../../../src/component/imboyo-components/page/detail/DetailSharingAction";
import { useRouter } from "next/router";
import DonationLayout from "../../../../src/component/imboyo-components/DonationLayout";

export default function DetailPage() {
  const router = useRouter();
  console.log(router.query.slug);

  return (
    <DonationLayout>
      <section css={styles.sectionContainer}>
        {/* TODO: Use Real Image */}
        <DetailImageHero image="/assets/img/program/program1.jpg" />

        <section css={styles.sectionContent}>
          <DetailPayment />
          <DetailCampaignDetail />
          <DetailSharingAction />
        </section>
      </section>
    </DonationLayout>
  );
}

// Region: Styles
const styles = {
  sectionContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
  `,

  sectionContent: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    width: 100%;
    padding: 0 2rem 3rem 2rem;
  `,
};
