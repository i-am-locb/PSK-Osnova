import { RefObject, useEffect, useState } from "react";
import { IServiceItem, IServiceItemPhotos } from "../../../types";
import styles from "./SliderItem.module.scss";

type Props = {
  species: IServiceItem;
  array1: RefObject<HTMLDivElement>;
  buff: any[];
  setArray: React.Dispatch<React.SetStateAction<Array<HTMLDivElement | null>>>
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

      <div className={styles.slider__text}>
        <h4 className={styles.slider__title}>{species.title}</h4>
        <p className={styles.slider__description}>{species.description}</p>
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
