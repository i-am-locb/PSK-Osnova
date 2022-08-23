import styles from "./Form.module.scss";
import { Form, Row } from "react-bootstrap";
import { MirrorButton } from "../Buttons/MirrorButton";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const FeedbackForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const form: any = useRef();

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_t9st904', 'template_pxnbnnn', form.current, 'lb3MmlB0cwZRva_xZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className={styles.feedback}>
      <h3 className={styles.feedback__title}>
        Проконсультируйтесь бесплатно с нашими специалистами
      </h3>
      <Form
        ref={form}
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
          <Form.Control name="name" type="text" placeholder="" />
        </Form.Group>

        <Form.Group
          controlId="formBasicEmail"
          className={"mb-3" + " " + styles.feedback__userEmail}
        >
          <Form.Label>Ваш e-mail</Form.Label>
          <Form.Control name="email" type="email" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Сообщение</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
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
            <button type="button" onClick={(event: React.MouseEvent<HTMLButtonElement>) => sendEmail(event)}>
              asdasd
            </button>
          </Form.Text>
        </Form.Group>
        <MirrorButton text="Отправить" />
      </Form>
    </div>
  );
};
