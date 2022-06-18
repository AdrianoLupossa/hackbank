import Head from "next/head";

import styled from "styled-components";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

import formatter from "../../modules/formatPrice";

import { Container } from "../index";

export const Box = styled.div`
  width: 500px;
  padding: 3rem;
  border: 1px solid #ddd;
  box-shadow: 1px 2px 3px #ddd;
  margin: auto;
`;

export default function Clientes() {
  return (
    <div>
      <Head>
        <title>Solicitação de Crédito | Hackbank</title>

        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />

      <Container
        className="d-flex flex-column flex-sm-row"
        style={{ height: "auto" }}
      >
        <Sidebar active={3} style={{ height: "auto" }} />
        <main className="p-3" style={{ width: "80%" }}>
          <h1>Solicitar crédito</h1>
          <div className="mb-3" style={{ maxWidth: "800px" }}>
            A análise de crédito é feita com base nos seu histórico bancário,
            isso inclui: As suas últimas transações e o seu salário.
          </div>

          <Box>
            <Form>
              <h2 style={{ fontSize: "1em" }} className="mb-3">
                Preencha o formulário abaixo para enviar uma solicitação de
                crédito.
              </h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Escolha o tipo de crédito</Form.Label>

                <Form.Select>
                  <option value="most-old">Adiantamento salarial</option>
                </Form.Select>
                <Form.Text className="text-muted">
                  Escolhemos os melhores créditos disponíveis para si.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Selecciona o montante a receber</Form.Label>
                <Form.Select>
                  <option value="50000">{formatter.format(50000)}</option>
                  <option value="100000">{formatter.format(100000)}</option>
                  <option value="200000">{formatter.format(200000)}</option>
                  <option value="300000">{formatter.format(300000)}</option>
                </Form.Select>
              </Form.Group>

              <div className="info alert alert-info">
                <p>Juros: 2%</p>
                <p>Tempo de retorno: 90 dias</p>
              </div>

              <Button variant="primary" type="submit">
                Enviar solicitação
              </Button>
            </Form>
          </Box>
        </main>
      </Container>
      <Footer />
    </div>
  );
}
