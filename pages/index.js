import { useState, useEffect } from "react";
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
    title: "Clientes registados",
    content: 8900,
    icon: "/assets/user.png",
  },
  {
    title: "Nº de transações",
    content: 3800,
    icon: "/assets/transaction.png",
  },
];

const StyledCard = styled(Card)`
  width: 300px;
  padding: 1rem;
  display: flex;
`;

export const Container = styled.div`
  height: 100vh;
  @media (max-width: 768px) {
    height: auto;
  }
`;

export default function Home({ customers, transactions }) {
  const [cardData] = useState([
    {
      title: "Clientes registados",
      content: customers,
      icon: "/assets/user.png",
    },
    {
      title: "Nº de transações",
      content: transactions,
      icon: "/assets/transaction.png",
    },
  ]);

  return (
    <div>
      <Head>
        <title>Hackbank - Aplicativo de Gestão de crédito</title>
        <meta
          name="description"
          content="O hackbank gerencia o acesso ao crédito para os clientes do banco."
        />
      </Head>

      <Header />

      <Container className="d-flex flex-column flex-sm-row">
        <Sidebar active={0} />
        <main className="p-3">
          <Row xs={1} md={3} sm={2} className="g-4">
            {cardData.map((card, key) => (
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
      </Container>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const request = await fetch(
      "https://ab90-129-122-186-206.ngrok.io/api/clients"
    );

    const response = await request.json();
    return {
      props: {
        customers: response.data.length,
        transactions: 269657,
      },
      revalidate: 3600 * 1000,
    };
  } catch (err) {
    console.log("Something went wrong: ", err);

    return {
      props: {
        customers: [],
      },
    };
  }
}
