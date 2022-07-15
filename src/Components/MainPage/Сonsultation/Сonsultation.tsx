import { Form, Row } from "react-bootstrap";
import { MirrorButton } from "../../../GlobalComponents/Buttons/MirrorButton";
import { Footer } from "../../../GlobalComponents/Footer/Footer";
import { FeedbackForm } from "../../../GlobalComponents/Form/Form";
import styles from "./Consultation.module.scss";

//TODO сделать кнопку некликабельной без принятого чекбокса

export const Consultation = () => {
  return (
    <Row className={styles.consultation}>
      <FeedbackForm />
      <Footer />
    </Row>
  );
};
