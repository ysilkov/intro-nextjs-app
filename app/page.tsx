import Link from "next/link"
import styles from "../styles/home.module.css"

export default async function Home() {
  return <div className={styles.home}>
    <div className="">
    <div className="">Hi, my name is Yevhen Silkov</div>
    <div className="">
      <Link href="/blog">My blog</Link>
    </div>
    <div className="">
      <Link href="/contact">Contacting with me</Link></div>
    </div>
  </div>
}
