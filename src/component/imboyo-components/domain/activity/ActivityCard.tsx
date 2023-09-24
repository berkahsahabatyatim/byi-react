import _ActivityCardHorizontal from "./_ActivityCardHorizontal";
import _ActivityCardVertical from "./_ActivityCardVertical";
import { ComponentDomainActivityCardType } from "../../../../../types/components/domain/components-domain-activity.type";

interface PropsType extends ComponentDomainActivityCardType {
  mode: "vertical" | "horizontal";
}

const ActivityCard = (props: PropsType) => (
  <>
    {props.mode === "vertical" ? (
      <_ActivityCardVertical
        title={props.title}
        collected={props.collected}
        target={props.target}
        image={props.image}
        link={props.link}
      />
    ) : (
      <_ActivityCardHorizontal
        title={props.title}
        collected={props.collected}
        target={props.target}
        image={props.image}
        link={props.link}
      />
    )}
  </>
);
export default ActivityCard;
