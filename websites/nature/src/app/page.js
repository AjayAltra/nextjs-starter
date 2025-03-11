import Image from "next/image";
import styles from "./page.module.css";
import Header from "@common/components/Utils/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Header>
          <h1>Nature 345</h1>
        </Header>
      </main>
    </div>
  );
}
