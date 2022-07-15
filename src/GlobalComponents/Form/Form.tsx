import styles from "./Form.module.scss";
import { Form, Row } from "react-bootstrap";
import { MirrorButton } from "../Buttons/MirrorButton";
import { useState } from "react";

export const FeedbackForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={styles.feedback}>
      <h3 className={styles.feedback__title}>
        Проконсультируйтесь бесплатно с нашими специалистами
      </h3>
      <Form
        className={
          !isChecked
            ? styles.feedback__form
            : styles.feedback__form + " " + styles.feedback__form_active
        }
      >
        <Form.Group
          controlId="formName"
          className={"mb-3" + " " + styles.feedback__userName}
        >
          <Form.Label>Ваше имя</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        <Form.Group
          controlId="formBasicEmail"
          className={"mb-3" + " " + styles.feedback__userEmail}
        >
          <Form.Label>Ваш e-mail</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Сообщение</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            className={styles.feedback__textArea}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label=""
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className={styles.feedback__checkbox}
          />
          <Form.Text className="text-muted">
            - Я принимаю{" "}
            <a href="#" className={styles.feedback__agreement}>
              условия соглашения
            </a>
          </Form.Text>
        </Form.Group>
        <MirrorButton text="Отправить" />
      </Form>
    </div>
  );
};
