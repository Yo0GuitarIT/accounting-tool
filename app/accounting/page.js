import Link from "next/link";

import UpContainer from "./UpContainer";
import DownContainer from "./DownContainer";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.mainContainer} >
      <UpContainer />
      <DownContainer />
      <Link href="/">Home</Link>
    </div>
  );
}
