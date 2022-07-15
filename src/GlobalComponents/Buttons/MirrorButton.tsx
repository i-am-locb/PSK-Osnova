import { Link } from "react-router-dom";
import styles from "./MirrorButton.module.scss";

type Props = {
  text: string;
  as?: any;
};

export const MirrorButton: React.FC<Props> = ({ text, as = undefined }) => {
  return (
    <>
      {as != undefined ? (
        <Link
          to={as.to}
          style={{ fontSize: "1.5em" }}
          className={styles.button}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {text}
        </Link>
      ) : (
        <a href="#" className={styles.button}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {text}
        </a>
      )}
    </>
  );
};
