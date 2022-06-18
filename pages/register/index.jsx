import { useState } from "react";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Header from "../../components/Header";

import { Box } from "../credit";

export default function Login() {
  const [accountCreation, setAccountCreation] = useState(true);
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <Header />
      <div className="p-3 p-sm-5">
        <h1 className="d-block text-center">Criar uma nova conta</h1>
        <Box className="m-auto mt-5">
          <Form>
            <h2 style={{ fontSize: "1em" }} className="mb-4">
              Preencha os campos abaixo para criar uma nova conta.
            </h2>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nome completo</Form.Label>
              <Form.Control type="text" placeholder="Seu nome" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Endereço de e-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Introduza o e-mail"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Palavra-passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Introduza a palavra-passe"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                minLength={8}
                required
              />
              <Form.Text className="text-muted">
                A palavra-passe deve conter no mínimo 8 caracteres, incluindo
                letras maiusculas, minusculas e números.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirmar Palavra-passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repita a palavra-passe"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                minLength={8}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Criar nova conta
            </Button>

            {accountCreation && (
              <div className="create-account-suggestion">
                <span className="d-block text-center my-3">
                  Ou caso já possua uma conta
                </span>
                <Link href="/login">
                  <Button variant="link" className="w-100 text-center">
                    Iniciar a sessão
                  </Button>
                </Link>
              </div>
            )}
          </Form>
        </Box>
      </div>
    </>
  );
}
