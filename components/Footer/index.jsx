import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
`;

export default function Footer() {
  return (
    <StyledFooter className="p-2 w-100 d-flex align-items-center justify-content-center">
      <span>Hackbank 2022 &copy; Todos os direitos reservados</span>
    </StyledFooter>
  );
}
