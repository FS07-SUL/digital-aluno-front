import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;

  @media (min-width: 768px) {
    padding: 2.5rem 3.5rem;
  }

  @media (min-width: 1440px) {
    padding: 2.5rem calc((100vw - 78rem) / 2);
  }
`;

export const LogoComponent = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const UserComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const NameAndBtn = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
  }

  button {
    background: none;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 0.75rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const ProfileImage = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  i {
    border: 3px solid #ececec;
    color: #ececec;
    padding: 0.5rem;
    border-radius: 50%;
  }
`;
