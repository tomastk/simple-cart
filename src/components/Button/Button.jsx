import styles from "./button.module.css";

const Button = ({ callToAction, onSubmit }) => {
  return (
    <button className={styles.button} onClick={onSubmit}>
      {callToAction}
    </button>
  );
};
export default Button;
