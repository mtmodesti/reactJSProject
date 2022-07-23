import { Container, AsideMenu, Div, LogoImg, Main, DivIcons } from "./styles";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import logo from "../../assets/images/favicon.jpg";
import { useNavigate } from "react-router-dom";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LanguageIcon from "@mui/icons-material/Language";

export const DashboardUser = () => {
  const navigate = useNavigate();

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
          <a href="https://panzers.com.br/produtos/" target={'_blank'}>
            <ProductionQuantityLimitsIcon
              style={{ color: "white", cursor: "pointer" }}
            />
          </a>
          <a href="https://panzers.com.br/start/" target={'_blank'}>
            <KeyboardArrowRightIcon
              style={{ color: "white", cursor: "pointer" }}
            />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5531997616207&text=Ol%C3%A1!%20Sou%20cliente%20Panzer%20e%20preciso%20de%20ajuda" target={'_blank'}>
            <WhatsAppIcon style={{ color: "white", cursor: "pointer" }} />
          </a>
          <a href="https://www.bet365.com/#/HO/" target={'_blank'}>
            <LanguageIcon style={{ color: "white", cursor: "pointer" }} />
          </a>
        </DivIcons>
        <Div onClick={mainNavigate}>
          <PowerSettingsNewIcon style={{ cursor: "pointer" }} />
        </Div>
      </AsideMenu>
      <Main />
    </Container>
  );
};

/* 
https://panzers.com.br/produtos/
https://panzers.com.br/start/
https://api.whatsapp.com/send?phone=5531997616207&text=Ol%C3%A1!%20Sou%20cliente%20Panzer%20e%20preciso%20de%20ajuda.
https://www.bet365.com/#/HO/

*/
