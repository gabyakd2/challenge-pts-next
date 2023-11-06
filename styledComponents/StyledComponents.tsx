import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px;

  @media (max-width: 768px) {
    // flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
  }
`;

export const LogoNav = styled.div`
  margin-left: 8px;
  img {
    width: 80%;
    height: 80px;
  }
`;

export const ButtonsContainerNav = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonNav = styled.p`
  color: #12adc4;
  font-weight: bold;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
`;

export const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    3,
    1fr
  ); // Aquí definimos 3 columnas con el mismo ancho.
  gap: 20px; 
`;

export const CardContainer = styled.div`
  width: 300px;
  max-height: 350px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  // padding: 16px;
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const TextBody = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const TextCard = styled.p`
  margin: 10px 0;
  font-size: 16px;
`;