import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Footer } from "../../GlobalComponents/Footer/Footer";
import { Header } from "../../GlobalComponents/Header/Header";
import { IServiceItem, IServiceItemPhotos, IState } from "../../types";
import { SliderItem } from "../MainPage/SliderItem/SliderItem";
import styles from "./Services.module.scss";

export const Services = () => {
  const services = useSelector((state: IState) => state.data.services);
  return (
    <Row className={styles.services}>
      <Header />
      <section className={styles.services__section}>
        {services.map((e: IServiceItem) => (
          <Services__item species={e} />
        ))}
      </section>
      <Footer />
    </Row>
  );
};

type Props = {
  species: IServiceItem;
};

export const Services__item: React.FC<Props> = ({ species }) => {
  const [x, setX] = useState(0);
  const gapX = (species.photos.length - 1) * 100;
  const [directionX, setDirectionX] = useState("left");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      setX(0);
    } else {
      if (directionX === "left") {
        setTimeout(() => {
          setX(x + 1);
        }, 100);
        if (x === gapX) {
          setDirectionX("right");
        }
      }
      if (directionX === "right") {
        setTimeout(() => {
          setX(x - 1);
        }, 100);
        if (x === 0) {
          setDirectionX("left");
        }
      }
    }
  }, [isModalOpen, x]);
  return (
    <div
      className={
        !isModalOpen
          ? styles.services__item
          : styles.services__item + " " + styles.services__item_active
      }
      onClick={
        !isModalOpen
          ? () => {
              setIsModalOpen(true);
            }
          : undefined
      }
    >
      <div className={styles.services__img}>
        {!isModalOpen ? (
          <img src={process.env.PUBLIC_URL + species.photos[0].xxl} alt="" />
        ) : (
          <>
            {species.photos.map((e: IServiceItemPhotos, index: number) => (
              <picture
                key={index}
                style={
                  !isModalOpen ? undefined : { transform: `translatex(-${x}%)` }
                }
              >
                <source
                  srcSet={process.env.PUBLIC_URL + e.xxl}
                  media="(min-width: 1400px)"
                  type="image/webp"
                />
                <source
                  srcSet={process.env.PUBLIC_URL + e.xl}
                  media="(min-width: 1200px)"
                  type="image/webp"
                />
                <source
                  srcSet={process.env.PUBLIC_URL + e.l}
                  media="(min-width: 992px)"
                  type="image/webp"
                />
                Family Therapy
                <source
                  srcSet={process.env.PUBLIC_URL + e.m}
                  media="(min-width: 768px)"
                  type="image/webp"
                />
                <source
                  srcSet={process.env.PUBLIC_URL + e.s}
                  media="(min-width: 576px)"
                  type="image/webp"
                />
                <img src={process.env.PUBLIC_URL + e.xs} alt="" />
              </picture>
            ))}
          </>
        )}
      </div>

      <div className={styles.services__text}>
        <h4 className={styles.services__title}>{species.title}</h4>
        <p className={styles.services__description}>{species.description}</p>
        <div
          className={styles.closeButton}
          onClick={() => setIsModalOpen(false)}
        >
          <div></div>
        </div>
      </div>
    </div>
  );
};
