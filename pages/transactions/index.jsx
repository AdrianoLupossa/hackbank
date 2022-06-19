import { useState } from "react";
import Head from "next/head";

import styled from "styled-components";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

import { Container } from "../index";

import formatter from "../../modules/formatPrice";

const Filter = styled.div`
  width: 100%;
`;

export default function Clientes() {
  const [search, setSearch] = useState("");
  const [transaction, setTransaction] = useState({});

  const handleSubmitSearch = async (e) => {
    e.preventDefault();

    const request = await fetch(
      `https://20f0-129-122-186-206.ngrok.io/api/clients/${Number(search)}`,
      {
        method: "GET",
      }
    );
    const response = await request.json();

    setTransaction(response);
    console.log(response);
  };

  return (
    <div>
      <Head>
        <title>Transações | Hackbank</title>

        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />

      <Container
        style={{ height: "auto" }}
        className="d-flex flex-column flex-sm-row"
      >
        <Sidebar style={{ height: "auto" }} active={2} />
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

            {/* <div
              className="d-flex align-items-center"
              style={{ gap: "0.5rem" }}
            >
              <span>Tipo de transação:</span>
              <Form.Select style={{ width: "300px" }}>
                <option value="all">Todas</option>
                <option value="debit">Débito</option>
                <option value="credit">Crédito</option>
              </Form.Select>
            </div> */}
          </Filter>
          <div className="my-4 d-flex">
            <form onSubmit={handleSubmitSearch}>
              <Form.Control
                type="text"
                autoFocus
                style={{ width: "400px" }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Pesquisar por ID"
              />
              <Button type="submit" variant="dark" className="mt-1">
                Pesquisar
              </Button>
            </form>
          </div>

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
              </tr>
            </thead>
            <tbody>
              {/* {Object.keys(transaction).length === 0 ? (
                <div className="alert alert-info w-100">
                  Pesquisa para exibir dados
                </div>
              ) : null} */}

              {transaction?.moviments?.map((mov, key) => {
                return (
                  <tr key={mov.id}>
                    <td>{mov.id}</td>
                    <td>{transaction.data.customerid}</td>
                    <td>{transaction.data.surname}</td>
                    <td>{mov.designation}</td>
                    <td>{mov.type}</td>
                    <td>{formatter.format(mov.value)}</td>
                    <td>{new Date(mov.date).toLocaleDateString()}</td>
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
