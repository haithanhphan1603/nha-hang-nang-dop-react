/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container grid grid--footer">
        <div class="logo-col">
          <a href="#" class="restaurant-icon footer-logo">
            Nàng Đốp
          </a>

          <ul class="social-links">
            <li>
              <a class="footer-link" href="#">
                <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>

          <p class="copyright">
            Copyright &copy; <span class="year">2027</span> by NangDop, Inc. All
            rights reserved.
          </p>
        </div>

        <div class="address-col">
          <p class="footer-heading">Contact us</p>
          <address class="contacts">
            <p class="address">Quốc lộ 2B, Hợp Châu, Tam Đảo Vĩnh Phúc</p>
            <p>
              <a class="footer-link" href="tel:0965908013">
                0965908013
              </a>
              <br />
              <a class="footer-link" href="mailto:hello@omnifood.com">
                hello@nangdop.com
              </a>
            </p>
          </address>
        </div>

        <nav class="nav-col">
          <p class="footer-heading">Account</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                Create account
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                iOS app
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Company</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                About NangDop
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                For Business
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Resources</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                Recipe directory{" "}
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Help center
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
