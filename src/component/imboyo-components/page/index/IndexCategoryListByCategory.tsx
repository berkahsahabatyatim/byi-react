/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ActivityListByCategory from "../../domain/activity/ActivityListByCategory";
import zakatDummyDataUtil from "../../../../../utils/zakat-dummy-data.util";

const activitiesByCategory = [
  {
    domId: "wakaf",
    title: "Program Wakaf",
    items: [zakatDummyDataUtil[4]],
  },
  {
    domId: "zakat",
    title: "Program Zakat",
    items: [
      zakatDummyDataUtil[0],
      zakatDummyDataUtil[1],
      zakatDummyDataUtil[2],
    ],
  },
  {
    domId: "qurban",
    title: "Program Qurban",
    items: [zakatDummyDataUtil[3]],
  },
];

const IndexCategoryListByCategory = () => {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 3rem;
        padding-bottom: 3rem;
      `}
    >
      {activitiesByCategory.map((category) => (
        <ActivityListByCategory
          key={category.title}
          title={category.title}
          items={category.items}
          domId={category.domId}
        />
      ))}
    </section>
  );
};
export default IndexCategoryListByCategory;
