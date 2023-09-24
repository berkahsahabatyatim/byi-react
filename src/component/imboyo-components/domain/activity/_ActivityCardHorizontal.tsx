/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import _ActivityCardContent from "./_ActivityCardContent";
import { Card } from "@mui/material";
import { ComponentDomainActivityCardType } from "../../../../../types/components/domain/components-domain-activity.type";

const _ActivityCardHorizontal = (props: ComponentDomainActivityCardType) => {
  return (
    <Card css={styles.cardContainer}>
      <div css={styles.image.container}>
        <Image
          src={props.image}
          alt="activities"
          width={0}
          height={0}
          quality={100}
          sizes={"100vw"}
          css={styles.image.img}
        />
      </div>

      <_ActivityCardContent
        title={props.title}
        target={props.target}
        collected={props.collected}
        link={props.link}
        titleAlign="right"
      />
    </Card>
  );
};
export default _ActivityCardHorizontal;

// Region: Styles
const styles = {
  cardContainer: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
  `,

  image: {
    container: css`
      position: relative;
      border-radius: 1rem;
      max-width: 170px;
      width: 150px;
      height: 150px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    `,

    img: css`
      object-fit: cover;
      width: auto;
      height: 100%;
    `,
  },
};
