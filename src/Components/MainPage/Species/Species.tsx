import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { IServiceItem, IState } from "../../../types";
import { SliderItem } from "../SliderItem/SliderItem";
import styles from "./Species.module.scss";

type Props = {
  scrollable: boolean;
  setScrollable: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Species: React.FC<Props> = ({ scrollable, setScrollable }) => {
  const species = useSelector((state: IState) => state.data.services);

  const array1 = useRef<HTMLDivElement>(null);
  const [scrollStop, setScrollStop] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [array, setArray] = useState<Array<HTMLDivElement | null>>([]);
  const buff: any[] = [];

  const sortArray = (e:React.WheelEvent, array: Array<HTMLDivElement | null>) => {
    if (window.innerWidth > 992) {
      setScrollStop(true);
      if (!scrollStop) {
        if (e.deltaY > 0) {
          setScrollDirection("down");
          const firstElem = array.shift();
          for (let i = 0; i < array.length; i++) {
            buff.push(array[i]);
          }
          buff.push(firstElem);
          setArray(buff);
        } else if (e.deltaY < 0) {
          setScrollDirection("up");
          const lastElement = array.pop();
          for (let i = 0; i < array.length; i++) {
            buff.push(array[i]);
          }
          buff.unshift(lastElement);
          setArray(buff);
        }
      }
      setTimeout(() => {
        setScrollStop(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 992) {
      if (scrollDirection === "down") {
        if (array.length >= 4) {
          // debugger
          gsap.fromTo(
            array[0],
            { x: "-25%", y: "-170%", opacity: 0.75 },
            {
              duration: 0.5,
              x: "-25%",
              y: "-270%",
              opacity: 0,
              scale: 0,
              zIndex: 0,
              delay: 0.03,
              ease: "power2.inOut",
              // onComplete: () => {
              //   setTimeout(() => {
              //     sortArray(array)
              //   }, 3000);
              // },
            }
          );

          gsap.fromTo(
            array[1],
            { x: 0, y: 0, opacity: 1, zIndex: 1 },
            {
              duration: 0.5,
              x: "-25%",
              y: "-170%",
              opacity: 0.75,
              scale: 1,
              zIndex: 0,
              boxShadow: "-5px 8px 8px 0 rgba(82,89,129,0.05)",
              ease: "power2.inOut",
            }
          );

          gsap.fromTo(
            array[2],
            { x: "-25%", y: "170%", opacity: 0.75 },
            {
              duration: 0.5,
              x: 0,
              y: 0,
              scale: 1.3,
              opacity: 1,
              zIndex: 0,
              delay: 0.03,
              ease: "power2.inOut",
            }
          );

          gsap.fromTo(
            array[3],
            { x: "-25%", y: "270%", opacity: 0, zIndex: 0, scale: 0 },
            {
              duration: 0.5,
              x: "-25%",
              y: "170%",
              scale: 1,
              opacity: 0.75,
              zIndex: 0,
              ease: "power2.inOut",
            }
          );
        }
      } else if (scrollDirection === "up") {
        if (array.length >= 4) {
          gsap.fromTo(
            array[1],
            {
              x: "-25%",
              y: "-270%",
              opacity: 0,
            },
            {
              duration: 0.5,
              x: "-25%",
              y: "-170%",
              opacity: 0.75,
              scale: 1,
              zIndex: 0,
              delay: 0.03,
              ease: "power2.inOut",
            }
          );

          gsap.fromTo(
            array[2],
            {
              x: "-25%",
              y: "-170%",
              opacity: 0.75,
              zIndex: 1,
            },
            {
              x: 0,
              y: 0,
              duration: 0.5,
              opacity: 1,
              scale: 1.3,
              zIndex: 2,
              boxShadow: "-5px 8px 8px 0 rgba(82,89,129,0.05)",
              ease: "power2.inOut",
            }
          );

          gsap.fromTo(
            array[3],
            {
              x: 0,
              y: 0,
              opacity: 1,
            },
            {
              x: "-25%",
              y: "170%",
              duration: 0.5,
              scale: 1,
              opacity: 0.75,
              zIndex: 2,
              delay: 0.03,
              ease: "power2.inOut",
            }
          );

          gsap.fromTo(
            array[4],
            {
              x: "-25%",
              y: "170%",
              opacity: 0.75,
              zIndex: 0,
              scale: 1,
            },
            {
              x: "-25%",
              y: "270%",
              duration: 0.5,
              scale: 0,
              opacity: 0,
              zIndex: 0,
              ease: "power2.inOut",
            }
          );
        }
      }
    }
  }, [array]);

  return (
    <Row className={styles.species} id={"species"}>
      <div className={styles.slider_wrap}>
        <div
          ref={array1}
          id="card-slider"
          className={styles.slider}
          onMouseEnter={() => setScrollable(false)}
          onMouseLeave={() => setScrollable(true)}
          onWheel={!scrollStop ? (e: React.WheelEvent) => sortArray(e, array) : undefined}
        >
          {/* <h3 className={styles.slider__name}>Виды работ</h3> */}

          {species.map((e: IServiceItem, index: number) => (
            <SliderItem
              key={index}
              species={e}
              array1={array1}
              buff={buff}
              setArray={setArray}
            />
          ))}
        </div>
      </div>
    </Row>
  );
};
