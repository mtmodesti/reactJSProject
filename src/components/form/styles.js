import styled from "styled-components";

export const Container = styled.form`
  height: auto;
  width: 100%;
  background-color: lightcyan;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;

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
