import React from "react";

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">Ăn là mê – chê không tính tiền</h1>
          <p className="hero-description">
            Nhà hàng Nàng Đốp đảm bảo đồ ăn 100% sạch, tươi ngon, giá cả phải
            chăng, phục vụ nhiệt tình chu đáo. Với kiến trúc nhà hàng thoáng
            mát, sạch sẽ, quý khách sẽ cảm thấy vô cùng hài lòng khi dừng chân
            tại đây.
          </p>
          <a href="#cta" className="btn btn--full margin-right-sm">
            Đặt bàn ngay
          </a>

          <a href="#how" className="btn btn--outline">
            Về chúng tôi &darr;
          </a>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img src="img/customers/customer-1.jpg" alt="Customer" />
              <img src="img/customers/customer-2.jpg" alt="Customer" />
              <img src="img/customers/customer-3.jpg" alt="Customer" />
              <img src="img/customers/customer-4.jpg" alt="Customer" />
              <img src="img/customers/customer-5.jpg" alt="Customer" />
              <img src="img/customers/customer-6.jpg" alt="Customer" />
            </div>
            <p className="delivered-text">
              <span>250,000+</span> khách hàng trong năm ngoái.
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <picture>
            <img
              src="img/hero-min.png"
              className="hero-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
