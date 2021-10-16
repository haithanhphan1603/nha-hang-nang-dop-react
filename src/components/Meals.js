/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const Meals = () => {
  return (
    <>
      <section className="section-meals" id="meals">
        <div className="container center-text">
          <span className="subheading">Meals</span>
          <h2 className="heading-secondary">
            Nhà hàng chúng tôi phục vụ hơn 50+ món
          </h2>
        </div>
        <div className="container">
          <h3 className="heading-tertiary">Những món tiêu biểu:</h3>
        </div>
        <div className="container grid grid--3-cols margin-bottom-md">
          <div className="meal">
            <img
              src="img/meals/meal-1.jpeg"
              className="meal-img"
              alt="Japanese Gyozas"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--beef">Thịt trâu</span>
              </div>
              <p className="meal-title">Trâu nướng tảng</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="flame-outline"
                  ></ion-icon>
                  <span>
                    <strong>650</strong> calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg; <strong>74</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="star-outline"
                  ></ion-icon>
                  <span>
                    <strong>4.9</strong> rating (537)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="meal">
            <img
              src="img/meals/meal-2.webp"
              className="meal-img"
              alt="Avocado Salad"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegan">Rau</span>
                <span className="tag tag--fish">cá</span>
              </div>
              <p className="meal-title">Cá chép nướng giòn</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="flame-outline"
                  ></ion-icon>
                  <span>
                    <strong>400</strong> calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg; <strong>92</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="star-outline"
                  ></ion-icon>
                  <span>
                    <strong>4.8</strong> rating (441)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="meal meal-best-seller">
            <img
              src="img/meals/meal-3.jpeg"
              className="meal-img"
              alt="fusion sushi"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegan">Rau</span>
                <span className="tag tag--duck">Thịt vịt</span>
              </div>
              <p className="meal-title">Vịt trời hấp xôi</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="flame-outline"
                  ></ion-icon>
                  <span>
                    <strong>800</strong> calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg; <strong>98</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="star-outline"
                  ></ion-icon>
                  <span>
                    <strong>4.9</strong> rating (501)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="diets container">
          <h3 className="heading-tertiary">Phù hợp mọi chế độ ăn kiêng:</h3>
          <ul className="list">
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Vegetarian</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Vegan</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Pescatarian</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Gluten-free</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Lactose-free</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Keto</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Paleo</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Low FODMAP</span>
            </li>
          </ul>
        </div>
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <div className="container all-recipes">
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a href="#" className="link">
            Xem tất cả các món &rarr;
          </a>
        </div>
      </section>
    </>
  );
};

export default Meals;
