import React from "react";
import styles from "@/styles/Contact.module.css";
import Image from "next/image";

type Props = {
  name: string;
  contact: string;
  user?: string;
  action: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  url?: string;
};

function Contact({ name, contact, user, action, onClick, url }: Props) {
  return (
    <>
      {action === "redirect" ? (
        <a href={url} target="_blank" className={styles.contact}>
          <Image
            src={`/${contact}.svg`}
            width={40}
            height={40}
            alt={`${name} logo`}
          />
          <div className={styles.user}>
            <div className={styles.socialTitle}>
              <p
                className={[styles.noMargin, styles.bold, styles.bright].join(
                  " "
                )}
              >
                {name}
              </p>

              <svg
                className={styles.actionImg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
              </svg>
            </div>
            <p className={styles.noMargin}>{user}</p>
          </div>
        </a>
      ) : (
        <button onClick={onClick} className={styles.contact}>
          <Image
            src={`/${contact}.svg`}
            width={40}
            height={40}
            alt={`${name} logo`}
          />
          <div className={styles.user}>
            <div className={styles.socialTitle}>
              <p
                className={[styles.noMargin, styles.bold, styles.bright].join(
                  " "
                )}
              >
                {name}
              </p>

              <svg
                className={styles.actionImg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" />
              </svg>
            </div>
            <p className={styles.noMargin}>{user}</p>
          </div>
        </button>
      )}
    </>
  );
}

export default Contact;
