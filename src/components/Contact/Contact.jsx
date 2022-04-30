import React from "react";
import styles from "./Contact.module.scss";
import ContactForm from "../ContactForm/ContactForm";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function Contact() {
  return (
    <div id="contact-section" className={styles.contact}>
      <h2>CONTACT ME</h2>
      <div className={styles.contactBox}>
        <div className={styles.sendEmail}>
          <span className={styles.spantitle}>Send me an Email:</span>
          <ContactForm />
        </div>
        <div className={styles.socialnetwork}>
          <span className={styles.spantitle}>Get to know me more:</span>
          <ul className={styles.wrapper}>
            <li className={classNames(styles.icon, styles.linkedin)}>
              <span className={styles.tooltip}>Linkedin</span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sol-lanosa/"
              >
                <span>
                  <FontAwesomeIcon icon={brands("linkedin")} />
                </span>
              </a>
            </li>
            <li className={classNames(styles.icon, styles.github)}>
              <span className={styles.tooltip}>Github</span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SolLanosa"
              >
                <span>
                  <FontAwesomeIcon icon={brands("github")} />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
