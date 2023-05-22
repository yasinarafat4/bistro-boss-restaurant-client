import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="md:flex">
        <div className="w-full md:w-1/2 py-28 lg:ps-32 bg-[#1F2937] text-white text-center">
          <h2 className="text-2xl lg:text-3xl mb-4">CONTACT US</h2>
          <div className="space-y-1">
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="bg-[#111827] text-white w-full md:w-1/2 text-center py-28 lg:pe-44 space-y-2">
          <h2 className="text-2xl lg:text-3xl">Follow US</h2>
          <p>Join us on social media</p>
          <div className="flex justify-center items-center gap-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="react-facebook-icon text-white text-xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="react-instagram-icon text-white text-xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="react-twitter-icon text-white text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-black text-white">
        <div>
          <p>Copyright © 2023 - All right reserved by Bistro Boss</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
