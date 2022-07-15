import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { MirrorButton } from "../../../GlobalComponents/Buttons/MirrorButton";
import { Header } from "../../../GlobalComponents/Header/Header";
import styles from "./Entry.module.scss";

export const Entry = () => {
  const company = useSelector((state: any) => state.data.company)
  return (
    <Row className={styles.entry}>
      <Header />
      <main className={styles.entry__titles}>
        <p className={styles.entry__companyName}>
          {company.name}
        </p>
        <h1 className={styles.entry__title}>{company.title}</h1>
        <MirrorButton text="Напиши нам" />
      </main>
    </Row>
  );
};
