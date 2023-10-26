import Record from "./Record";
import Total from "./total";
import styles from "./DownContainer.module.css";

function upContainer() {
  return (
    <div className={styles.downContainer}>
      <Record inAndOut="+1000" item="打工" />
      <Record inAndOut="-200" item="逛街" />
      <Record inAndOut="+30800" item="十一月薪水" />
      <Total />
      
    </div>
  );
}
export default upContainer
