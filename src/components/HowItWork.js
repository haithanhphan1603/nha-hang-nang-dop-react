import React from "react";

const HowItWork = () => {
  return (
    <section className="section-how" id="how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Chúng tôi đảm bảo bữa ăn của bạn được phục vụ bằng những thực phẩm tốt
          nhất.
        </h2>
      </div>

      <div className="container grid grid--2-cols grid--center-v">
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">Thịt cá hảo hạng</h3>
          <p className="step-description">
            Thịt cá của chúng tôi được lấy từ những trang trại uy tín trong
            tỉnh. Luôn đảm bảo sạch 100%, đạt tiêu chuẩn VietGap. Thịt cá của
            nhà hàng luôn là loại hảo hạng, giàu dinh dưỡng.
          </p>
        </div>

        <div className="step-img-box">
          <img
            src="img/app/app-screen-1.png"
            className="step-img"
            alt="iPhone app
            preferences selection screen"
          />
        </div>

        <div className="step-img-box">
          <img
            src="img/app/app-screen-2.png"
            className="step-img"
            alt="iPhone app
            meal approving plan screen"
          />
        </div>
        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="heading-tertiary">Rau củ được chọn lọc kĩ lưỡng</h3>
          <p className="step-description">
            Rau củ được lấy trực tiếp trong ngày, có nguồn gốc từ Tam Đảo. Nhà
            hàng chúng tôi đảm bảo rau củ sạch, được bảo quản chặt trẽ.
          </p>
        </div>

        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary">
            Những công thức chế biến chuẩn Việt
          </h3>
          <p className="step-description">
            Đầu bếp của chúng tôi còn có nhiều kinh nghiệm trong nghề, với tay
            nghề trên 5 năm. Nhà hàng có đủ công thức và cách chế biến những
            loại đặc sản về chim tơ: sâm cầm, chim cu gáy, chim câu hấp xôi. Các
            món về dê tươi, trâu tươi, vịt trời,...
          </p>
        </div>
        <div className="step-img-box">
          <img
            src="img/app/app-screen-3.png"
            className="step-img"
            alt="iPhone app
            delivery screen"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
