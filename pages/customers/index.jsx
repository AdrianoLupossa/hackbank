import Head from "next/head";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

import { Container } from "../index";

export default function Clientes() {
  return (
    <div>
      <Head>
        <title>Clientes registados | Hackbank</title>
        <meta
          name="description"
          content="O hackbank gerencia o acesso ao crédito para os clientes do banco."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />

      <Container className="d-flex flex-column flex-sm-row">
        <Sidebar active={1} />
        <main className="p-3">
          <h1>Clientes Hackbank</h1>
        </main>
      </Container>
      <Footer />
    </div>
  );
}
