import Image from "next/image";
import Link from "next/link";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link href="/">
            <Navbar.Brand>
              <Image
                alt="Logotipo do site"
                src="/logo.svg"
                width={50}
                height={50}
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Logado como:{" "}
              <a style={{ textDecoration: "none" }} href="#login">
                @administrador
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
