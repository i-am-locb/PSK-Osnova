import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "./Stages.module.scss";

export const Stages = () => {
  const stages = useSelector((state: any) => state.data.stages);
  return <Row className={styles.stages}>
    {stages.map((e:any, index: number) => <Stage key={index} stage={e} />)}
  </Row>;
};
type Props = {
  stage: any;
};

export const Stage: React.FC<Props> = ({ stage }) => {
  return (
    <div className={styles.stages__item}>
      <img
        src={stage.icon}
        alt="Телефон"
        className={styles.stages__icon}
      />
      <span className={styles.stages__description}>
        <h6 className={styles.stages__title}>{stage.title}</h6>
        <p className={styles.stages__text}>{stage.text}</p>
      </span>
    </div>
  );
};
