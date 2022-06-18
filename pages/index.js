import Head from "next/head";

import styled from "styled-components";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";

import formatter from "../modules/formatPrice";

const cards = [
  {
    title: "Clientes",
    content: 10,
    icon: "/assets/user.png",
  },
  {
    title: "Nº de Transações",
    content: 10,
    icon: "/assets/transaction.png",
  },
  {
    title: "Total de Crédito concedido",
    credit: 100000000,
    icon: "/assets/money.png",
  },
];

const StyledCard = styled(Card)`
  width: 300px;
  padding: 1rem;
  display: flex;
`;

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
          <Row xs={1} md={3} sm={2} className="g-4">
            {cards.map((card, key) => (
              <Col
                key={key}
                className="d-flex align-items-stretch justify-content-center justify-content-sm-start"
              >
                <StyledCard>
                  <Card.Img
                    variant="top"
                    src={card.icon}
                    style={{ width: 48, height: 48 }}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ color: "text-black", fontSize: "1.5em" }}
                    >
                      {card.title}
                    </Card.Title>
                    <Card.Text
                      style={{ color: "text-black", fontSize: "1.5em" }}
                    >
                      {card.content || formatter.format(card.credit)}
                    </Card.Text>
                  </Card.Body>
                </StyledCard>
              </Col>
            ))}
          </Row>
        </main>
      </div>

      <Footer />
    </div>
  );
}
