import React from "react";

const CallToAction = () => {
  return (
    <section class="section-cta" id="cta">
      <div class="container">
        <div class="cta">
          <div class="cta-text-box">
            <h2 class="heading-secondary">Đặt bàn ngay và luôn!</h2>
            <p class="cta-text">
              Bữa ăn ngon, bổ dưỡng đang đón chờ bạn. Đặt bàn ngay bây giờ!
              <br />
              Quý khách cũng có thể huỷ bàn trước 2 giờ nếu có việc đột xu
            </p>

            <form class="cta-form" name="sign-up" netlify>
              <div>
                <label for="full-name">Họ và tên</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="full-name"
                  required
                />
              </div>

              <div>
                <label for="email">Số điện thoại</label>
                <input
                  id="number"
                  type="number"
                  placeholder="098765412"
                  name="number"
                  required
                />
              </div>

              <div>
                <label for="select-where">
                  Làm cách nào bạn biết tới chúng tôi?
                </label>
                <select id="select-where" name="select-where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button class="btn btn--form">Đặt Bàn</button>
            </form>
          </div>
          <div
            class="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
