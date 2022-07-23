import styled from "styled-components";
import LogoPic from '../../assets/images/favicon.jpg'


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #287233;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AsideMenu = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 14%;
  justify-content: space-around;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;

  
`;
export const DivIcons = styled.div`
  display: flex;
  flex-direction: column;
height: 50%;
justify-content: space-evenly;

`

export const LogoImg = styled.div`
background-image: url(${(props) => (props.src ? LogoPic : null)});

img {
    width: 65%;
}
`

export const Main = styled.main`
background-color: #fff;
height: 90%;
width: 86%;
border-radius: 20px;
margin-right: 1rem;

`
