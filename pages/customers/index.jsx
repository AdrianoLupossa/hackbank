import Head from "next/head";

import styled from "styled-components";

import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

import { Container } from "../index";

const Filter = styled.div`
  width: 100%;
`;

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
        <main className="p-3" style={{ width: "80%" }}>
          <h1>Clientes registados</h1>
          <Filter className="d-flex justify-content-end my-2">
            <div
              className="d-flex align-items-center"
              style={{ gap: "0.5rem" }}
            >
              <span>Mostrar por:</span>
              <Form.Select style={{ width: "300px" }}>
                <option value="most-old">Idade mais avançada</option>
                <option value="most-young">Idade mais jovem</option>
                <option value="salary-advance">
                  Aptos a adiantamento salarial
                </option>
                <option value="credit-card">
                  Aptos a receberem cartão de crédito
                </option>
                <option value="high-credit-card">
                  Pontuação de crédito alta
                </option>
                <option value="low-credit-card">
                  Pontuação de crédito baixa
                </option>
                <option value="high-balance">Saldo mais alto</option>
                <option value="low-balance">Saldo mais baixo</option>
              </Form.Select>
            </div>
          </Filter>

          <Table striped bordered hover responsive compressed>
            <thead>
              <tr>
                <th>#</th>
                <th>ID do cliente</th>
                <th>Sobrenome</th>
                <th>Pontuação de crédito</th>
                <th>País</th>
                <th>Genero</th>
                <th>Data de nascimento</th>
                <th>Data de abertura da conta</th>
                <th>Número da conta</th>
                <th>Número do cartão de crédito</th>
                <th>Saldo em conta</th>
                <th>Data do último saldo</th>
                <th>Salário estimado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </main>
      </Container>
      <Footer />
    </div>
  );
}
