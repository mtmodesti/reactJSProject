import { Container } from "./styles"
import { PasswordInput } from "../passInput";
import { TextField } from "@mui/material";
import {Button} from "@mui/material"



const Form = () => {

    return (
        <Container>  

          <h3>Insert your infos</h3>

          <TextField fullWidth placeholder={"Name"}/>

          <TextField fullWidth id="fullWidth" placeholder={"E-mail"}/>

          <PasswordInput placeholder={"Password"} />

          <PasswordInput placeholder={"Confirm Password"}/>

          <Button 
          onClick={() => {console.log('oi')}}
          variant="contained">Confirm</Button>

        </Container>
    )
}

export default Form

