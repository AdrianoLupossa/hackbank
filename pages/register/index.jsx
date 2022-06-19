import { useState } from "react";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Header from "../../components/Header";

import { Box } from "../credit";

import axios from "axios";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [accountCreation, setAccountCreation] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const handleInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    setDisabled(true);

    if (values.username === "" && values.email === "") {
      alert("Os campos de nome e e-mail são obrigatórios");
      return;
    }

    if (values.password === values.confirmPassword) {
      // axios.post("https://25c2-129-122-186-206.ngrok.io/api/register", values).then((res) => {

      // })

      // const formData = new FormData();

      // formData.append("username", values.username);
      // formData.append("email", values.email);
      // formData.append("password", values.password);

      console.log(
        JSON.stringify({
          name: values.username,
          email: values.email,
          password: values.password,
        })
      );

      const headers = {
        "Content-Type": "application/json",
        mode: "no-cors",
        "Access-Control-Allow-Origin": "*",
      };

      axios
        .post(
          "https://20f0-129-122-186-206.ngrok.io/api/register",
          {
            name: values.username,
            email: values.email,
            password: values.password,
          },
          { headers }
        )
        .then(function (response) {
          console.log(response);
          setDisabled(false);
        })
        .catch(function (error) {
          console.log(error);
          setDisabled(false);
        });

      // const request = await axios(
      //   "https://25c2-129-122-186-206.ngrok.io/api/register",
      //   {
      //     method: "POST",
      //     mode: "no-cors",
      //     body: {
      //       name: values.username,
      //       email: values.email,
      //       password: values.password,
      //     },
      //   }
      // ).catch((err) => {
      //   console.log("Something went wrong: ", err);
      // });
    } else {
      alert(
        "As palavra-passe não coincidem, por favor garanta que são iguais."
      );
      setDisabled(false);
    }
  }

  return (
    <>
      <Header />
      <div className="p-3 p-sm-5">
        <h1 className="d-block text-center">Criar uma nova conta</h1>
        <Box className="m-auto mt-5">
          <Form onSubmit={handleSubmit}>
            <h2 style={{ fontSize: "1em" }} className="mb-4">
              Preencha os campos abaixo para criar uma nova conta.
            </h2>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nome completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Seu nome"
                name="username"
                value={values.username}
                onChange={handleInputChange}
                required
                disabled={disabled}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Endereço de e-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Introduza o e-mail"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                required
                disabled={disabled}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Palavra-passe</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Introduza a palavra-passe"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                value={values.password}
                onChange={handleInputChange}
                minLength={8}
                required
                disabled={disabled}
              />
              <Form.Text className="text-muted">
                A palavra-passe deve conter no mínimo 8 caracteres, incluindo
                letras maiusculas, minusculas e números.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirmar Palavra-passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repita a palavra-passe"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleInputChange}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                minLength={8}
                required
                disabled={disabled}
              />
            </Form.Group>

            <Button variant="success" type="submit" disabled={disabled}>
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
