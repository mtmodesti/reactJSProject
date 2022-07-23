import styled from "styled-components";
import img from "../../assets/images/login-bg.jpg";

export const Container = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagemBg = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 65%;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const FormMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
  background-color: #006936;

  span {
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    background-image: url(${img});
    background-size: cover;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 80%;
      min-width: 250px;
      width: 70%;
    }
  }

  h1 {
    text-shadow: 2px 2px #000;
    color: #fff;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    min-width: 250px;
    width: 70%;
    border-radius: 20px;
    justify-content: space-evenly;

  }
`;
