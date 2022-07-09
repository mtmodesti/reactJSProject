import { Container } from "./styles"
import { PasswordInput } from "../passInput";
import { TextField } from "@mui/material";
import {Button} from "@mui/material"
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";




const formSchema = yup.object().shape({
  name: yup.string(), //.required('Name required').max('Max length 50').matches("^[ a-zA-Z áãàâ]*$", "Only letters"),
  email: yup.string(), //.required("required e-mail").email("invalid e-mail"),
  password:yup.string(), //.required("required password").min(6, "6 caracters minimum"),
  confPassword:yup
  .string()  //.required("confirmation required").min(6, "minimum 6 caracters").oneOf([yup.ref("password")], "passwords must match"),
})



const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(
     {resolver: yupResolver(formSchema)},
  );
  const onSubmit = data => {
    console.log(data)
    //console.log(errors)

  };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>  

          <h3>Insert your infos</h3>

          <TextField 
          //error={!!errors.name ? console.log('erro') : console.log('ok')}
          {...register("name")}
          fullWidth placeholder={"Name"}/>

          <TextField 
      //    error={!!errors.email?.message}
          {...register("email")}
          fullWidth  
          placeholder={"E-mail"}/>

          <PasswordInput
          //error={!!errors.password?.message}
          refs={register("password")}
          placeholder={"Password"} />

          <PasswordInput 
          //error={!!errors.password?.message}
          refs={register("confPassword")}
          placeholder={"Confirm Password"}/>

          <Button 
          type="submit"

          variant="contained">Confirm</Button> 

        </Container>
    )
} 

export default Form

