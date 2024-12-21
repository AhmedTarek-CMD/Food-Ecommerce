import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>
            Indulge in a delightful culinary journey at Tomato, where we serve
            freshly prepared dishes crafted with the finest ingredients. Whether
            you’re craving hearty comfort food, exotic flavors, or healthy
            options, our diverse menu has something for everyone.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook Icon" />
            <img src={assets.twitter_icon} alt="Twitter Icon" />
            <img src={assets.linkedin_icon} alt="Linkedin Icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivary</li>
            <li>Privacy Police</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <a href="tel:+201029645794" target="_blank">
                +20 1029 645 794
              </a>
            </li>
            <li>
              <a href="mailto:ahmedtarekofficial799@gmail.com">
                ahmedtarekofficial799@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copy Right &#169; 2024 | All Rights Belongs To Ahmed Tarek
      </p>
    </div>
  );
};

export default Footer;
