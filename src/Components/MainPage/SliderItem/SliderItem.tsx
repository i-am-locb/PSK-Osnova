import { useEffect, useState } from "react";
import { servicesVersion } from "typescript";
import styles from "./SliderItem.module.scss";

type Props = {
  species: any;
  array1: any;
  buff: any;
  setArray: any;
};

export const SliderItem: React.FC<Props> = ({
  species,
  array1,
  buff,
  setArray,
}) => {
  const [x, setX] = useState(0);
  const gapX = (species.photos.length - 1) * 100;
  const [directionX, setDirectionX] = useState("left");
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 992) {
      if (array1 && array1.current) {
        for (let i = 0; i < array1.current.children.length; i++) {
          buff.push(array1.current!.children[i]);
        }
        setArray(buff);
      }
    }
  }, []);

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
          ? styles.slider__item
          : styles.slider__item + " " + styles.slider__item_active
      }
      onClick={
        !isModalOpen
          ? () => {
              setIsModalOpen(true);
            }
          : undefined
      }
    >
      <div className={styles.slider__img}>
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

      <div className={styles.slider__text}>
        <h4 className={styles.slider__title}>{species.title}</h4>
        <p className={styles.slider__description}>{species.description}</p>
        <button
          className={styles.slider__closeButton}
          onClick={() => setIsModalOpen(false)}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};
