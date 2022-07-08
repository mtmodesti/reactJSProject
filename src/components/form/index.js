import { Container } from "./styles"
import { PasswordInput } from "../passInput";
import { TextField } from "@mui/material";
import {Button} from "@mui/material"
import React from "react";
import { useForm } from "react-hook-form";




const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>  

          <h3>Insert your infos</h3>

          <TextField 
          {...register("name")}
          fullWidth placeholder={"Name"}/>

          <TextField 
          {...register("email")}
          fullWidth  
          placeholder={"E-mail"}/>

          <PasswordInput 
          refs={register("password")}
          placeholder={"Password"} />

          <PasswordInput 
          refs={register("confPassword")}
          placeholder={"Confirm Password"}/>

          <Button 
          type="submit"
          variant="contained">Confirm</Button> 

        </Container>
    )
} 

export default Form

