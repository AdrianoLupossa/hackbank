import Head from "next/head";

import { useEffect, useState } from "react";
import styled from "styled-components";

import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

import { Container } from "../index";

const Filter = styled.div`
  width: 100%;
  gap: "1rem";
`;

export default function Clientes({ customers }) {
  const [initialPage, setInitialPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const handlePageChange = (e) => {
    const page = e.target.value;
    setInitialPage(initialPage + rowsPerPage);
    setRowsPerPage(rowsPerPage * (page + 1));
  };

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

      <Container
        style={{ height: "auto" }}
        className="d-flex flex-column flex-sm-row"
      >
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

            <Form.Select onChange={handlePageChange} style={{ width: "300px" }}>
              {customers.slice(0, 100).map((_page, i) => (
                <option key={i} value={i++}>
                  Página {i++}
                </option>
              ))}
            </Form.Select>
          </Filter>

          <Table striped bordered hover responsive compressed="compressed">
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
                <th>Saldo após movimento</th>
              </tr>
            </thead>
            <tbody>
              {customers
                .slice(initialPage, rowsPerPage)
                .map((customer, index) => {
                  return (
                    <tr key={index}>
                      <td>{customer.customerid}</td>
                      <td>{customer.surname}</td>
                      <td>{customer.creditScore}</td>
                      <td>{customer.geography}</td>
                      <td>{customer.gender}</td>
                      <td>{customer.dateofbirth}</td>
                      <td>{customer.openaccountdate}</td>
                      <td>{customer.currentaccountnumber}</td>
                      <td>{customer.creditcardaccountnumber}</td>
                      <td>{customer.balance}</td>
                      <td>{customer.balancedate}</td>
                      <td>{customer.estimatedsalary}</td>
                      <td>{customer.currentbalance}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const request = await fetch(
    "https://20f0-129-122-186-206.ngrok.io/api/clients"
  );

  const response = await request.json();

  return {
    props: {
      customers: response.data,
    },
    revalidate: 3600 * 1000,
  };
}
