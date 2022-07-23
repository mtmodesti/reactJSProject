import styled from "styled-components";

export const Container = styled.form`
  height: auto;
  max-width: 80%;
  min-width: 290px;
  flex-wrap: wrap;
  background-color: transparent;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  gap: 15px;
  background-color: #005346;
  margin-bottom: 15px;
  box-shadow: inset 0 0 1em #00543d, 0 0 1em #000;

  @media screen and (max-width: 768px) {
  display: flex;
flex-direction: column;
  }

  h3 {
    color: #fff;
  }

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  header > span {
    background-color: #660000;
    border-radius: 50%;
    color: lightcyan;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    cursor: pointer;
    transition: 1s;
  }
  header > span:hover {
    transform: scale(1.2);
    background-color: #ff0000;
  }
`;

export const DivBtn = styled.div`
display: flex;
gap: 10px;
`
