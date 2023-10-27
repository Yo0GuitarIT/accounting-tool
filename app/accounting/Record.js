import DeleteButton from "./DeleteButton";
import styles from "./Record.module.css";

function Record({ inAndOut, item, onDeleteClick }) {
  return (
    <div className={styles.RecordContainer} style={{ color: inAndOut < 0 ? "red" : "inherit" }} >
      <div className={styles.boxContainer}>
        <p>{inAndOut}</p>
      </div>
      <div className={styles.boxContainer}>
        <p>{item}</p>
      </div>
      <div className={styles.boxContainer}>
        <DeleteButton onClick={onDeleteClick} />
      </div>
    </div>
  );
}

export default Record;
