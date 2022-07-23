import { Container, Header, SecondHeader, MainPic } from "./styles";
import logo from "../../assets/images/favicon.jpg";
import mainPic from "../../assets/images/registerPic.png";

export const Register = () => {
  return (
    <Container>
      <Header>
        <img src={logo}></img>
      </Header>
      <SecondHeader>
        <span>Acesso 100% seguro</span>
      </SecondHeader>
      <MainPic src={mainPic} />
    </Container>
  );
};

export default Register;
