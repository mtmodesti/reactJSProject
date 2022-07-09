import { Container } from "./styles"
import { TextField } from "@mui/material";
import {Button} from "@mui/material"
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';


const formSchema = yup.object().shape({
  name: yup.string().required('Name required').matches('^[ a-zA-Z á]*$','Only letters'),
  email: yup.string().required("E-mail required").email("invalid e-mail"),
  password:yup.string().required("Password required").min(6, "6 caracters minimum").matches('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$','Senha fraca'),
  confPassword:yup
  .string().required("Confirmation required").min(6, "minimum 6 caracters").oneOf([yup.ref('password'), null],'Password must match'),
})



const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(
     {resolver: yupResolver(formSchema)},
  );

  const navigate = useNavigate();


  const onSubmit =  (data) =>  {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      confPassword: data.confPassword
    }
    navigate('/dashboard')
    console.log(data)
  };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>  

          <h3>Insert your infos</h3>

       
          <TextField 
          label='name'
          name="name"
          helperText={errors.name?.message} {...register('name')}
          error={!!errors.name?.message}
          {...register('name')}
          placeholder={"Name"}/>
          
 
          <TextField 
          label='email'
          name="email"
          helperText={errors.email?.message} {...register('email')}
          error={!!errors.email?.message}
          {...register("email")}
          placeholder={"E-mail"}/>


        <TextField 
          label='password'
          name="password"
          helperText={errors.password?.message} {...register('password')}
          error={!!errors.password?.message}
          {...register("password")}
          placeholder={"Password"}/>

<TextField 
          label='Confirm password'
          name="confPassword"
          helperText={errors.confPassword?.message} {...register('confPassword')}
          error={!!errors.confPassword?.message}
          {...register("confPassword")}
          placeholder={"Confirm Password"}/>

          <Button 
          type='submit'
          variant="contained">Confirm</Button> 

        </Container>
    )
} 

export default Form

