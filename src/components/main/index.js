import { Container, ImagemBg, FormMenu } from "./style";
import { useState } from "react";
import React from "react";
import Form from "../form";
import LostAccountForm from "../lostAccountForm";

const Main = () => {
  const [lostAccount, setLostAccount] = useState(false);

  return (
    <Container>
      <FormMenu>
        <h1>Panzer</h1>

  {lostAccount ? <LostAccountForm setLostAccount={setLostAccount} /> : <Form lostAccount={lostAccount} setLostAccount={setLostAccount}></Form>}

      </FormMenu>
      <ImagemBg></ImagemBg>
    </Container>
  );
};

export default Main;
