import {
  HeaderComponent,
  LogoComponent,
  NameAndBtn,
  ProfileImage,
  UserComponent,
} from "./styles";
import logoImg from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const fakeData = {
    username: "Bruno Santiago",
    profilePic: "",
  };

  return (
    <HeaderComponent>
      <LogoComponent onClick={() => navigate("/")}>
        <img src={logoImg} alt="Logo Digital College" />
      </LogoComponent>
      <UserComponent>
        <NameAndBtn>
          <span>{fakeData.username}</span>
          <button type="button">Sair</button>
        </NameAndBtn>
        <ProfileImage type="button" onClick={() => navigate("/meu-perfil")}>
          {fakeData.profilePic ? (
            <img src="" alt="Profile" />
          ) : (
            <i className="pi pi-user" style={{ fontSize: "2rem" }}></i>
          )}
        </ProfileImage>
      </UserComponent>
    </HeaderComponent>
  );
};

export default Header;
