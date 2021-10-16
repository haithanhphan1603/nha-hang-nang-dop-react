import React from "react";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="restaurant-icon">
        Nàng Đốp
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#how">
              Giới thiệu
            </a>
          </li>

          <li>
            <a className="main-nav-link" href="#testimonials">
              Phản hồi
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#menu">
              Thực Đơn
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#location">
              Địa điểm
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="#cta">
              Đặt bàn
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
};

export default Header;
