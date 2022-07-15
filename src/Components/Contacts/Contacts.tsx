import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Footer } from "../../GlobalComponents/Footer/Footer";
import { FeedbackForm } from "../../GlobalComponents/Form/Form";
import { Header } from "../../GlobalComponents/Header/Header";
import styles from "./Contacts.module.scss";

export const Contacts = () => {
  const contacts = useSelector((state: any) => state.data.contacts);
  return (
    <Row className={styles.contacts}>
      <Header />
      <section className={styles.contacts__section}>
        <FeedbackForm />
        <div className={styles.contacts__info}>
          <span>
            <p className={styles.contacts__title}>Адрес:</p>
            <p className={styles.contacts__details}>{contacts.address}</p>
          </span>

          <span>
            <p className={styles.contacts__title}>Телефон: </p>
            {contacts.phones.map((e: any) => (
              <p className={styles.contacts__details}>{e}</p>
            ))}
          </span>
          <span>
            <p className={styles.contacts__title}>E-mail:</p>
            <p className={styles.contacts__details}>{contacts.email}</p>
          </span>
          <span>
            <p className={styles.contacts__title}>График:</p>
            <p className={styles.contacts__details}>Дни: {contacts.schedule.days}</p>
            <p className={styles.contacts__details}>Время: {contacts.schedule.time}</p>
          </span>
        </div>
      </section>
      <Footer />
    </Row>
  );
};
