import { Container } from "./styles"
import { PasswordInput } from "../passInput";
import { TextField } from "@mui/material";


const Form = () => {

    return (
        <Container>  
          <PasswordInput placeholder={"Password"} />

          <PasswordInput placeholder={"Confirm Password"}/>
       
        
        <TextField placeholder={"Name"}/>

        </Container>
    )
}

export default Form

