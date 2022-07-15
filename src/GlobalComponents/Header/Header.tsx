import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MirrorButton } from "../Buttons/MirrorButton";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Row className={styles.header}>
      <div
        className={
          !isModalOpen
            ? styles.header__burger
            : styles.header__burger + " " + styles.burgerOpen
        }
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <div></div>
      </div>
      <Col
        className={
          !isModalOpen
            ? styles.header__items
            : styles.header__items + " " + styles.open
        }
      >
      <MirrorButton as={{type: "Link", to: "/"}} text={"Главная"} />
      <MirrorButton as={{type: "Link", to: "/about"}} text={"О нас"} />
      <MirrorButton as={{type: "Link", to: "/services"}} text={"Услуги"} />
      <MirrorButton as={{type: "Link", to: "/prices"}} text={"Цены"} />
      {/* <MirrorButton as={{type: "Link", to: "/manufacture"}} text={"Производство"} />
      <MirrorButton as={{type: "Link", to: "/terms"}} text={"Условия"} /> */}
      <MirrorButton as={{type: "Link", to: "/contacts"}} text={"Контакты"} />
       
      </Col>
    </Row>
  );
};
