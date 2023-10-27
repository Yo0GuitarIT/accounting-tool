"use client"
import Link from "next/link"
import styles from "./page.module.css"

export default function Page() {
  return (
    <div className={styles.main}>
      <h1 style={{ marginBottom: "revert" }}>Accounting Tool</h1>
      <Link className={styles.button85} href="/accounting/">{ "Let's start" }</Link>
    </div >
  );
}
