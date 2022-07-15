import { useEffect, useRef } from "react";
import styles from "./Navigation.module.scss";

type Props = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Navigation: React.FC<Props> = ({
  setCurrentPage,
  currentPage,
}) => {
  return (
    <div className={styles.navigation}>
      <ul
        className={`${styles.navigation__list} 
        ${currentPage >= 0 ? styles.navigation__list_first : ""}
        ${currentPage >= 1 ? styles.navigation__list_second : ""}
        ${currentPage >= 2 ? styles.navigation__list_third : ""}
        ${currentPage >= 3 ? styles.navigation__list_fourth : ""}
      `}
      >
        <li
          className={`${
            currentPage >= 0 ? styles.navigation__item_active : ""
          }`}
        >
          <a
            href="#"
            onClick={() => setCurrentPage(0)}
            className={
              (currentPage === 0
                ? styles.navigation__link + " " + styles.navigation__link_active
                : styles.navigation__link)
            }
          >
            Главная
          </a>
        </li>
        <li
          className={`${
            currentPage >= 1 ? styles.navigation__item_active : ""
          }`}
        >
          <a
            onClick={() => setCurrentPage(1)}
            className={
              (currentPage === 1
                ? styles.navigation__link + " " + styles.navigation__link_active
                : styles.navigation__link)
            }
          >
            Виды работ
          </a>
        </li>
        <li
          className={`${
            currentPage >= 2 ? styles.navigation__item_active : ""
          }`}
        >
          <a
            onClick={() => setCurrentPage(2)}
            className={
              (currentPage === 2
                ? styles.navigation__link + " " + styles.navigation__link_active
                : styles.navigation__link)
            }
          >
            Этапы услуг
          </a>
        </li>
        <li
          className={`${
            currentPage >= 3 ? styles.navigation__item_active : ""
          }`}
        >
          <a
            onClick={() => setCurrentPage(3)}
            className={
              (currentPage === 3
                ? styles.navigation__link + " " + styles.navigation__link_active
                : styles.navigation__link)
            }
          >
            Связь
          </a>
        </li>
      </ul>
    </div>
  );
};
