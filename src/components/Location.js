import React from "react";

const Location = () => {
  return (
    <section class="section-location" id="location">
      <div class="container">
        <span class="subheading center-text">Hours and location</span>
        <h2 class="heading-secondary center-text">Thời gian và địa điểm</h2>
        <a
          href="https://goo.gl/maps/9ncSusY3X8UMbewE6"
          rel="noopener noreferrer"
          target="_blank"
          class="address margin-bottom-md"
        >
          Quốc lộ 2B, Hợp Châu
          <br />
          Tam Đảo, Vĩnh Phúc
        </a>
        <p class="time-text margin-bottom-md">
          8h sáng tới 10h tối. <br />
          Mọi ngày trong tuần
        </p>
      </div>
      <div class="location-img"></div>
    </section>
  );
};

export default Location;
