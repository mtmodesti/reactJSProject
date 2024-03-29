import { Container, AsideMenu, Div, LogoImg, Main, DivIcons } from "./styles";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import logo from "../../assets/images/favicon.jpg";
import { useNavigate } from "react-router-dom";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LanguageIcon from "@mui/icons-material/Language";
import trabalheConosco from "../../assets/images/instrucoes.png";
import "./styles.css";
import { UserContext } from "../../providers/user/user";
import { useContext } from "react";

export const DashboardUser = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!user.logged) {
      navigate("/");
    }
  };

  setTimeout(() => {
    handleLogin();
  }, 100);

  const mainNavigate = () => {
    navigate("/");
  };

  return (
    <Container>
      <AsideMenu>
        <LogoImg>
          <img src={logo}></img>
        </LogoImg>
        <DivIcons>
          <a
            title="Produtos Panzer"
            href="https://panzers.com.br/produtos/"
            target={"_blank"}
          >
            <ProductionQuantityLimitsIcon
              style={{ color: "white", cursor: "pointer" }}
            />
          </a>
          <a
            title="Aprenda a utilizar"
            href="https://panzers.com.br/start/"
            target={"_blank"}
          >
            <KeyboardArrowRightIcon
              style={{ color: "white", cursor: "pointer" }}
            />
          </a>
          <a
            title="Nosso Whatsapp"
            href="https://api.whatsapp.com/send?phone=5531997616207&text=Ol%C3%A1!%20Sou%20cliente%20Panzer%20e%20preciso%20de%20ajuda"
            target={"_blank"}
          >
            <WhatsAppIcon style={{ color: "white", cursor: "pointer" }} />
          </a>
          <a
            title="Bet 365"
            href="https://www.bet365.com/#/HO/"
            target={"_blank"}
          >
            <LanguageIcon style={{ color: "white", cursor: "pointer" }} />
          </a>
        </DivIcons>

        <Div onClick={mainNavigate}>
          <span
          title="Logout"
          >
            <PowerSettingsNewIcon style={{ cursor: "pointer" }} />
          </span>
        </Div>
      </AsideMenu>
      <Main>
        <header>Bem vindo {user.name}</header>
        <div>
          <div>
            <span className="trabalheConosco" src={trabalheConosco}>
              trabalhe conosco
            </span>
          </div>
          <div>
            <div className="noticiasDireitaDiv">
              <span className="n1"></span>
              <span className="n2"></span>
              <span className="n3"></span>
            </div>
          </div>
        </div>
      </Main>
    </Container>
  );
};
