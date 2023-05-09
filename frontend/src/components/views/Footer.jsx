import styles from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <footer id={styles.footer} className="w-full">
      <div className="container mx-auto px-4">
        <div id={styles.textColor} className="py-4">
          <ul className="flex justify-center space-x-12">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
          </ul>
        </div>

        <div id={styles.textColor} className="text-center pb-4">
          © 2023 All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
