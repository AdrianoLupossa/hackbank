import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hackbank - Aplicativo de Gestão de crédito</title>
        <meta
          name="description"
          content="O hackbank gerencia o acesso ao crédito para os clientes do banco."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1>Hackbank</h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
