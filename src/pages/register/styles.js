import styled from "styled-components";
import mainPic from "../../assets/images/registerPic.png";

export const Container = styled.div`
  background-color: #006936;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

`;
export const Header = styled.header`
  width: 100%;
  height: 50px;
  background: #020d3f;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: left;

  img {
    height: 80%;
    padding: 20px;
  }
`;

export const SecondHeader = styled.header`
  width: 100%;
  height: 40px;
  background: #7fffd4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const MainPic = styled.img`
  background-image: url(${(props) => (props.src ? mainPic : null)});
  width: 95%;
  max-width: 700px;
  height: 30%;
  border-radius: 15px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Span = styled.span`
justify-content: flex-start;
align-items: center;
width: 100%;
display: flex;
margin-top: 15px;
float: left;
margin-left: 25px;
margin-bottom: 20px;

span {
  cursor: pointer;
}
`
