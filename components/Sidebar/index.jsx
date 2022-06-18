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
  color: #000;
  text-decoration: none;
  font-size: 1.2em;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  border-bottom: transparent 5px solid;
  width: 200px;

  &:active {
    /* background-color: #100747; */
    border-color: #100747;
  }

  &:hover,
  &.active {
    color: #0f125f;
    border-color: #0f125f;
  }
`;

export default function Sidebar() {
  return (
    <StyledSidebar className="bg-light">
      <Nav className="d-flex flex-column p-2" style={{ gap: "1rem" }}>
        <Link href="/">
          <MenuItem className="text-decoration-none active">Inicio</MenuItem>
        </Link>
        <Link href="/">
          <MenuItem className="text-decoration-none">Clientes</MenuItem>
        </Link>
        <Link href="/">
          <MenuItem className="text-decoration-none">Transações</MenuItem>
        </Link>
        <Link href="/">
          <MenuItem className="text-decoration-none">Crédito</MenuItem>
        </Link>
      </Nav>
    </StyledSidebar>
  );
}
