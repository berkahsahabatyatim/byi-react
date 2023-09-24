/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import activities from "../../../../../utils/zakat-dummy-data.util";
import ActivityCard from "../../domain/activity/ActivityCard";

const _IndexChoosenActivitesCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={15}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        css={css({
          height: "100%",
          width: "100%",
          cursor: "grab",
        })}
      >
        {/* TODO: Use Real Data Later with Map Looping */}
        {activities.map((_item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "250px",
            }}
          >
            <ActivityCard
              title={_item.title}
              collected={_item.collected}
              target={_item.target}
              image={_item.image}
              link={`/donasi/app/detail/${_item.slug}`}
              mode="vertical"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default _IndexChoosenActivitesCarousel;
