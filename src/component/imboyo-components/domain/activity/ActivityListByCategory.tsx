/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ActivityCard from "./ActivityCard";

import { ComponentDomainActivityType } from "../../../../../types/components/domain/components-domain-activity.type";
import _ActivityListByCategoryHeading from "./_ActivityListByCategoryHeading";

// TODO: Use Real Data Later
interface PropsType {
  title: string;
  items: ComponentDomainActivityType[];
  domId?: string;
}

const ActivityListByCategory = (props: PropsType) => {
  return (
    <div css={styles.container} id={props.domId}>
      <_ActivityListByCategoryHeading>
        {props.title}
      </_ActivityListByCategoryHeading>

      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          gap: 1rem;
        `}
      >
        {props.items.map((item) => (
          <ActivityCard
            key={item.slug}
            mode="horizontal"
            title={item.title}
            target={item.target}
            collected={item.collected}
            image={item.image}
            link={`/donasi/app/detail/${item.slug}`}
          />
        ))}
      </div>
    </div>
  );
};
export default ActivityListByCategory;

// Region: Styles
const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
  `,
};
