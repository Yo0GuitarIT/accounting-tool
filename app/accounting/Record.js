import DeleteButton from "./DeleteButton";

import styles from "./Record.module.css";

function Record({ inAndOut, item, onDeleteClick }) {
  return (
    <div className={styles.RecordContainer}>
      <p>{inAndOut}</p>
      <p>{item}</p>
      <DeleteButton onClick={onDeleteClick} />
    </div>
  );
}

export default Record;
