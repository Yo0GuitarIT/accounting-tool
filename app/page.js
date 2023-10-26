"use client"
import Link from "next/link"
import styles from "./page.module.css"

export default function Page() {
  return (
    <div className={styles.main}>
      <h1>Hello, Home page!</h1>
      <Link href="/accounting/">Les's Start~</Link>
    </div>
    );
}
