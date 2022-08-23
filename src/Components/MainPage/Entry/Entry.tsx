import { useState } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { MirrorButton } from "../../../GlobalComponents/Buttons/MirrorButton";
import { FeedbackForm } from "../../../GlobalComponents/Form/Form";
import { Header } from "../../../GlobalComponents/Header/Header";
import { IState } from "../../../types";
import styles from "./Entry.module.scss";

export const Entry = () => {
  const company = useSelector((state: IState) => state.data.company);
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <Row className={styles.entry}>
      <Header />
      <main className={styles.entry__titles}>
        <p className={styles.entry__companyName}>{company.name}</p>
        <h1 className={styles.entry__title}>{company.title}</h1>
        <MirrorButton
          text="Напиши нам"
          newStateValue={true}
          setStateValue={setIsFormOpen}
        />
      </main>
      <div
        className={
          !isFormOpen ? styles.form : styles.form + " " + styles.form_active
        }
      >
        <FeedbackForm />
        <div
          className={styles.closeButton}
          onClick={() => setIsFormOpen(!isFormOpen)}
        >
          <div></div>
        </div>
      </div>
    </Row>
  );
};
