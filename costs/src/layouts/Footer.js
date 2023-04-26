import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
  import styles from "./Footer.module.css";
  
  function Footer() {
    return (
      <footer className={styles.footer}>
        <ul className={styles.social_list}>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedinIn />
          </li>
        </ul>
        <p className={styles.copy_right}>
          <span>Costs</span> &copy; 2023
          <br></br>
          Desenvolvido por <span>Wilkson Flor</span>.
        </p>
      </footer>
    );
  }
  
  export default Footer;
  