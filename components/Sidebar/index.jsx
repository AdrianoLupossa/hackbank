import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  height: 100vh;
  width: 20%;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  font-size: 1.2em;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;

  &:active {
    background-color: #100747;
  }

  &:hover,
  &.active {
    background-color: #0f125f;
    color: #fff;
  }
`;

export default function Sidebar() {
  return (
    <StyledSidebar className="bg-light">
      <Nav className="d-flex flex-column" style={{ gap: "1rem" }}>
        <Link href="/">
          <MenuItem className="text-decoration-none active">Inicio</MenuItem>
        </Link>
        <Link href="/">
          <MenuItem className="text-decoration-none">Clientes</MenuItem>
        </Link>
        <Link href="/">
          <MenuItem className="text-decoration-none">Transações</MenuItem>
        </Link>
      </Nav>
    </StyledSidebar>
  );
}
