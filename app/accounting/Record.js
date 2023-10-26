import DeleteButton from "./DeleteButton";

import styles from "./Record.module.css"

function Record({inAndOut,item}) {
  return (
    <div className={styles.RecordContainer}>
      <p>{inAndOut}</p>
      <p>{item}</p>
      <DeleteButton />
    </div>
  );
}

export default Record;
