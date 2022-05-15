import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <div>
        <h1 className={styles.title}>Index Page (Home)</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          error provident dicta excepturi nesciunt adipisci dolor at fuga,
          delectus impedit ea consequatur veritatis facilis saepe repudiandae
          culpa mollitia odit, quisquam, perspiciatis tenetur soluta labore! Rem
          adipisci ab maxime laudantium aliquid, rerum, aliquam beatae nesciunt
          perferendis quae fugit dolores eius voluptatibus!
        </p>

        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
