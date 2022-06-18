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
        <title>Transações | Hackbank</title>

        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />

      <Container className="d-flex flex-column flex-sm-row">
        <Sidebar active={2} />
        <main className="p-3" style={{ width: "80%" }}>
          <h1>Transação efectuadas</h1>
          <Filter className="d-flex justify-content-between mb-2 mt-4">
            <div
              className="d-flex align-items-center"
              style={{ gap: "0.5rem" }}
            >
              <span>Mostrar por:</span>
              <Form.Select style={{ width: "300px" }}>
                <option value="most-recent">Mais recente</option>
                <option value="most-old">Mais antiga</option>
                <option value="most-value">Maior valor</option>
                <option value="less-value">Menor valor</option>
              </Form.Select>
            </div>

            <div
              className="d-flex align-items-center"
              style={{ gap: "0.5rem" }}
            >
              <span>Tipo de transação:</span>
              <Form.Select style={{ width: "300px" }}>
                <option value="all">Todas</option>
                <option value="debit">Débito</option>
                <option value="credit">Crédito</option>
              </Form.Select>
            </div>
          </Filter>

          <Table striped bordered hover responsive compressed>
            <thead>
              <tr>
                <th>#</th>
                <th>ID do cliente</th>
                <th>Nome do cliente</th>
                <th>Designação</th>
                <th>Tipo</th>
                <th>Valor</th>
                <th>Data do movimento</th>
                <th>Saldo após movimento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>Larry the Bird</td>
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
