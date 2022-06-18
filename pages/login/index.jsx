import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Box } from "../credit";

export default function Login() {
  return (
    <Box>
      <Form>
        <h2 style={{ fontSize: "1em" }}>
          Preencha o formulário abaixo para enviar uma solicitação de crédito.
        </h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Box>
  );
}
