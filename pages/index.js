import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";

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

      <Header />

      <div style={{ height: "100vh" }} className="d-flex">
        <Sidebar />
        <main className="p-3">
          <h1>Hackbank</h1>
        </main>
      </div>

      <Footer />
    </div>
  );
}
