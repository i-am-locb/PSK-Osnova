import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Footer } from "../../GlobalComponents/Footer/Footer";
import { Header } from "../../GlobalComponents/Header/Header";
import { SliderItem } from "../MainPage/SliderItem/SliderItem";
import styles from "./Services.module.scss";

export const Services = () => {
  const services = useSelector((state: any) => state.data.services);
  return (
    <Row className={styles.services}>
      <Header />
      <section className={styles.services__section}>
        {services.map((e: any) => (
          <Services__item  species={e}/>
        ))}
      </section>
      <Footer />
    </Row>
  );
};

// type Props = {
//     service: any;
//   };

// const Services__item: React.FC<Props> = ({service}) => {
//   return (
//     <div className={styles.services__item}>
//       <div className={styles.services__img}>
//         <img src={service.photos[0]} alt="" />
//       </div>
//       <h4 className={styles.services__title}>{service.title}</h4>
//     </div>
//   );
// };

type Props = {
  species: any;
};

export const Services__item: React.FC<Props> = ({
  species
}) => {
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
          <img src={species.photos[0]} alt="" />
        ) : (
          <>
            {species.photos.map((e: any, index: number) => (
              <img
                key={index}
                src={e}
                alt=""
                style={
                  !isModalOpen ? undefined : { transform: `translatex(-${x}%)` }
                }
              />
            ))}
          </>
        )}
      </div>

      <div className={styles.services__text}>
        <h4 className={styles.services__title}>{species.title}</h4>
        <p className={styles.services__description}>{species.description}</p>
        <button
          className={styles.services__closeButton}
          onClick={() => setIsModalOpen(false)}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};
