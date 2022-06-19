import Link from "next/link";

import styled from "styled-components";

import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";

import Nav from "react-bootstrap/Nav";

const StyledSidebar = styled.aside`
  width: 20%;
  height: 100vh;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const MenuItem = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 1.2em;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  border-left: transparent 5px solid;
  /* width: 180px; */
  gap: 0.5rem;

  &:active {
    /* background-color: #100747; */
    /* 0f125f */
    border-left-color: #100747;
  }

  &:hover,
  &.active {
    color: #fff;
    background-color: #100747;
    border-left-color: #0f125f;
  }
`;

export default function Sidebar({ active, style }) {
  return (
    // d-none d-md-flex
    <StyledSidebar
      style={style}
      className="d-flex bg-light flex-column justify-content-between"
    >
      <Nav className="d-flex flex-row flex-sm-column flex-sm-nowrap justify-content-between justify-content-sm-start">
        <Link href="/">
          <MenuItem
            className={`text-decoration-none ${
              active === 0 ? "active" : ""
            } d-flex align-items-center`}
          >
            <MdHome size="1.5rem" /> Inicio
          </MenuItem>
        </Link>
        <Link href="/customers">
          <MenuItem
            className={`text-decoration-none ${
              active === 1 ? "active" : ""
            } d-flex align-items-center`}
          >
            <FaUser size="1.3rem" /> Clientes
          </MenuItem>
        </Link>
        <Link href="/transactions">
          <MenuItem
            className={`text-decoration-none ${
              active === 2 ? "active" : ""
            } d-flex align-items-center`}
          >
            <RiExchangeLine size="1.5rem" /> Transações
          </MenuItem>
        </Link>
        {/* <Link href="/credit">
          <MenuItem
            className={`text-decoration-none ${
              active === 3 ? "active" : ""
            } d-flex align-items-center`}
          >
            <GiPayMoney size="1.5rem" /> Crédito
          </MenuItem>
        </Link> */}
      </Nav>

      <Link href="/login">
        <MenuItem
          className={`text-decoration-none ${
            active === 4 ? "active" : ""
          } d-flex align-items-center`}
        >
          <AiOutlineLogout size="1.5rem" /> Sair
        </MenuItem>
      </Link>
    </StyledSidebar>
  );
}

Sidebar.defaultProps = {
  active: 0,
};
