import { Container, Header, SecondHeader, MainPic, Span } from "./styles";
import logo from "../../assets/images/favicon.jpg";
import mainPic from "../../assets/images/registerPic.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import FormRegister from "../../components/registerForm";

export const Register = () => {
  const navigate = useNavigate();

  const loginNavigate = () => {
    navigate("/");
  };

  return (
    <Container>
      <Header>
        <img src={logo}></img>
      </Header>
      <SecondHeader>
        <span>Acesso 100% seguro</span>
      </SecondHeader>
      <MainPic src={mainPic} />

      <Span >
        <ArrowBackIcon /> <span onClick={loginNavigate}>Voltar</span>
      </Span>
      <FormRegister />
    </Container>
  );
};

export default Register;
