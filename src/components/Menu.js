import React from "react";

const Menu = () => {
  return (
    <section className="section-menu container" id="menu">
      <div className="main-menu">
        <span className="subheading center-text">Menu</span>
        <h2 className="heading-secondary center-text">Thực đơn</h2>
        <div className="menu grid grid--2-cols">
          <div className="drink">
            <h2 className="menu-list-title">Đồ uống</h2>
            <ul>
              <li className="item">
                <span className="name">Nước ngọt</span>
                <span className="price">15</span>
              </li>
              <li className="item">
                <span className="name">Bia</span>
                <span className="price">25</span>
              </li>
              <li className="item">
                <span className="name">Rượu</span>
                <span className="price">40</span>
              </li>
            </ul>
          </div>
          <div className="sub-meal">
            <h2 className="menu-list-title">Điểm tâm</h2>
            <ul>
              <li className="item">
                <span className="name">Ngô chiên</span>
                <span className="price">180</span>
              </li>
              <li className="item">
                <span className="name">Khoai tây chiên</span>
                <span className="price">220</span>
              </li>
              <li className="item">
                <span className="name">Đồ tráng miệng</span>
                <span className="price">200</span>
              </li>
            </ul>
          </div>
          <div className="beef-meal">
            <h2 className="menu-list-title">Trâu các món</h2>
            <ul>
              <li className="item">
                <span className="name">Trâu xào rau muống</span>
                <span className="price">135</span>
              </li>
              <li className="item">
                <span className="name">Trâu xào măng trúc</span>
                <span className="price">145</span>
              </li>
              <li className="item">
                <span className="name">Trâu xào lá lốt</span>
                <span className="price">135</span>
              </li>
              <li className="item">
                <span className="name">Trâu nướng xiên</span>
                <span className="price">155</span>
              </li>
              <li className="item">
                <span className="name">Trâu nướng tảng</span>
                <span className="price">155</span>
              </li>
              <li className="item">
                <span className="name">Lẩu trâu nhúng mẻ</span>
                <span className="price">600</span>
              </li>
            </ul>
          </div>
          <div className="fish-meal">
            <h2 className="menu-list-title">Cá các loại</h2>
            <ul>
              <li className="item">
                <span className="name">Cá tầm</span>
                <span className="price">550</span>
              </li>
              <li className="item">
                <span className="name">Cá hồi</span>
                <span className="price">800</span>
              </li>
              <li className="item">
                <span className="name">Cá chép giòn</span>
                <span className="price">380</span>
              </li>
              <li className="item">
                <span className="name">Cá lăng</span>
                <span className="price">350</span>
              </li>
              <li className="item">
                <span className="name">Cá trình</span>
                <span className="price">650</span>
              </li>
              <li className="item">
                <span className="name">Cá muối</span>
                <span className="price">550</span>
              </li>
              <li className="item">
                <span className="name">Cá trăm kho niêu</span>
                <span className="price">125</span>
              </li>
            </ul>
          </div>

          <div className="bird-meal">
            <h2 className="menu-list-title">Thịt chim các kiểu</h2>
            <ul>
              <li className="item">
                <span className="name">Gà rang rừng</span>
                <span className="price">135</span>
              </li>
              <li className="item">
                <span className="name">Vịt trời hấp xôi</span>
                <span className="price">220</span>
              </li>
              <li className="item">
                <span className="name">Chim câu quay</span>
                <span className="price">220</span>
              </li>
              <li className="item">
                <span className="name">Gà rang muối</span>
                <span className="price">200</span>
              </li>
              <li className="item">
                <span className="name">Gà lăng xào nấm</span>
                <span className="price">200</span>
              </li>
            </ul>
          </div>
        </div>

        <aside className="menu-details grid">
          Tính theo tỷ giá nghìn đồng. Giá bên trên chưa bao gồm thuế VAT.
        </aside>
      </div>
    </section>
  );
};

export default Menu;
