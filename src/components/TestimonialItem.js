import React from "react";
import img from "../images/team_1.jpg";

const TestimonialItem = ({ content, name }) => {
  return (
    <div class="item ml">
      <div class="client-testimonial dark">
        <div class="client-inner-content">
          <i class="charity-quotes"></i>
          <p>{content}</p>
        </div>
        <div class="client-testimonial-icon">
          <img src={img} alt="" className="carousel-img" />
          <div class="text">
            <div class="name">Josefin Fashkin</div>
            <div class="post">Senior Activist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
