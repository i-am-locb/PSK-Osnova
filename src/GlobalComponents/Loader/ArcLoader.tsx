import styles from "./ArcLoader.module.scss"

export const ArcLoader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__arc}></div>
      <div className={styles.loader__arc}></div>
      <div className={styles.loader__arc}></div>
    </div>
  );
};
// 