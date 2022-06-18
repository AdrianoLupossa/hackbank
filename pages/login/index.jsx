import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Header from "../../components/Header";

import { Box } from "../credit";

export default function Login() {
  return (
    <>
      <Header />
      <div className="p-3 p-sm-5">
        <h1 className="d-block text-center">Hackbank</h1>
        <Box className="m-auto mt-5">
          <Form>
            <h2 style={{ fontSize: "1em" }}>
              Introduza os seus dados para iniciar sessão. Caso ainda não tenha
              uma conta, clica em criar uma conta.
            </h2>
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Manter-me conectado/a"
                checked
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Box>
      </div>
    </>
  );
}
