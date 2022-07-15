import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Footer } from "../../GlobalComponents/Footer/Footer";
import { FeedbackForm } from "../../GlobalComponents/Form/Form";
import { Header } from "../../GlobalComponents/Header/Header";
import styles from "./About.module.scss";

export const About = () => {
  const companyDescription = useSelector(
    (state: any) => state.data.company.description
  );
  const arr = companyDescription.split("/br");
  return (
    <Row className={styles.about}>
      <Header />
      <section className={styles.about__section}>
        <article>
          {arr.map((e: any) => (
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
