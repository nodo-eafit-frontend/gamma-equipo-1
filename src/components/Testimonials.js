import React from "react";
import TestimonialItem from "./TestimonialItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const testimonios = [
  {
    content:
      "Gracious is a nonproﬁt organization supported by community leaders, corporate sponsors, churches, helpless etc. and concerned citizens",
    name: "Josefin Fashkin",
  },
  {
    content:
      "Gracious is a nonproﬁt organization supported by community leaders, corporate sponsors, churches, helpless etc. and concerned citizens",
    name: "Josefin Fashkin",
  },
  {
    content:
      "Gracious is a nonproﬁt organization supported by community leaders, corporate sponsors, churches, helpless etc. and concerned citizens",
    name: "Josefin Fashkin",
  },
  {
    content:
      "Gracious is a nonproﬁt organization supported by community leaders, corporate sponsors, churches, helpless etc. and concerned citizens",
    name: "Josefin Fashkin",
  },
  {
    content:
      "Gracious is a nonproﬁt organization supported by community leaders, corporate sponsors, churches, helpless etc. and concerned citizens",
    name: "Josefin Fashkin",
  },
  {
    content:
      "Gracious is a nonproﬁt organization supported by community leaders, corporate sponsors, churches, helpless etc. and concerned citizens",
    name: "Josefin Fashkin",
  },
];

const Testimonials = () => {
  return (
    <section class="wide-tb-100 bg-white" id="testimonios">
      <div class="container">
        <h1 class="heading-main">
          <small>Nuestros </small>
          Testimonios
        </h1>
        <div class="row">
          <div class="col-md-12">
            <div class="    owl-theme" id="home-client-testimonials">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                autoplay={{ delay: 3000 }}
              >
                {testimonios.map((testimonio, i) => (
                  <SwiperSlide key={i}>
                    <TestimonialItem
                      content={testimonio.content}
                      name={testimonio.name}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
