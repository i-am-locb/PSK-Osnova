import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Footer } from "../../GlobalComponents/Footer/Footer";
import { FeedbackForm } from "../../GlobalComponents/Form/Form";
import { Header } from "../../GlobalComponents/Header/Header";
import { IState } from "../../types";
import styles from "./About.module.scss";

export const About = () => {
  const companyDescription = useSelector(
    (state: IState) => state.data.company.description
  );
  const arr: string[] = companyDescription.split("/br");
  return (
    <Row className={styles.about}>
      <Header />
      <section className={styles.about__section}>
        <article>
          {arr.map((e: string) => (
            <>
              <p>{e}</p>
              <br />
            </>
          ))}
        </article>
        <FeedbackForm />
      </section>
      <Footer />
    </Row>
  );
};
