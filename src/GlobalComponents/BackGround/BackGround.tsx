import styles from "./BackGround.module.scss";


export const BackGround = () => {
  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        disablePictureInPicture
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <source src={process.env.PUBLIC_URL + "/Video/BGVideo.webm"} type="video/webm" />
      </video>
    </div>
  );
};
