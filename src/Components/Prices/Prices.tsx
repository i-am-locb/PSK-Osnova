import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Footer } from "../../GlobalComponents/Footer/Footer";
import { Header } from "../../GlobalComponents/Header/Header";
import styles from "./Prices.module.scss";

export const Prices = () => {
  const prices = useSelector((state: any) => state.data.prices);
  return (
    <Row className={styles.prices}>
      <Header />
      <section className={styles.prices__section}>
        {prices.map((e: any) => (
          <Table price={e} key={e.id} />
        ))}
      </section>
      <Footer />
    </Row>
  );
};

type Props = {
  price: any;
};

const Table: React.FC<Props> = ({ price }) => {
  // console.log(price.Heads);

  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.table}>
      <div
        className={
          !isActive
            ? styles.table__titles
            : styles.table__titles + " " + styles.table__titles_active
        }
        onClick={() => toggleIsActive()}
      >
        <h2
          className={
            !isActive
              ? styles.table__title
              : styles.table__title + " " + styles.table__title_active
          }
        >
          {price.title}
        </h2>
      </div>
      <div
        className={
          !isActive
            ? styles.table__wrapper
            : styles.table__wrapper + " " + styles.active
        }
      >
        {price.subTitle != "-" ? (
          <h3 className={styles.table__subTitle}>{price.subTitle}</h3>
        ) : undefined}
        {price.description != "-" ? (
          <h3 className={styles.table__description}>{price.description}</h3>
        ) : undefined}

        <table>
          <thead>
            <tr>
              {price.Heads.map((e: any) => (
                <th scope="col">{e}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {price.list.map((e: any) => (
              <tr>
                {e.name != undefined ? <td>{e.name}</td> : undefined}
                {e.color != undefined ? <td>{e.color}</td> : undefined}
                {e.price != undefined ? <td>{e.price}</td> : undefined}
                {e.secondPrice != undefined ? (
                  <td>{e.secondPrice}</td>
                ) : undefined}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
