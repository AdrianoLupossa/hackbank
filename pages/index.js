import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Container from "react-bootstrap/Container";

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

      <Container style={{ height: "100vh" }}>
        <Sidebar />
        <main>
          <h1>Hackbank</h1>
        </main>
      </Container>

      <Footer />
    </div>
  );
}
