/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { css } from "@emotion/react";

interface PropsType {
  image: string;
}

const DetailImageHero = (props: PropsType) => {
  return (
    <section css={styles.container}>
      <div css={styles.image.container}>
        <Image
          src={props.image}
          alt="Charity"
          width={0}
          height={0}
          quality={100}
          sizes={"100vw"}
          css={styles.image.image}
          priority={true}
        />
      </div>
    </section>
  );
};
export default DetailImageHero;

// Region: Styles
const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,

  image: {
    container: css`
      position: relative;
      width: 100%;
      max-width: 500px;
    `,
    image: css`
      object-fit: cover;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      width: 100%;
      height: auto;
      aspect-ratio: 1/1;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
    `,
  },
};
