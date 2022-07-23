import { Container } from "./styles";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";

const formSchema = yup.object().shape({
  email: yup.string().required("E-mail required").email("email inválido"),
});

const LostAccountForm = ({setLostAccount}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

 
  const handleMainMenu = () => {
    setLostAccount(false)
  }

  const onSubmit = (data) => {
    const formData = {
      email: data.email,
    };
    console.log('entrei')
    alert('Enviamos um e-mail para o endereço solicitado')
    setLostAccount(false)
  
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [showConfPassowrd, setshowConfPassowrd] = useState(false);
  const handleClickShowConfPassword = () =>
    setshowConfPassowrd(!showConfPassowrd);
  const handleMouseDownConfPassword = () =>
    setshowConfPassowrd(!showConfPassowrd);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <header>
        <h3>Recuperar conta</h3>
      </header>

      <TextField
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        color="success"
        name="email"
        helperText={errors.email?.message}
        {...register("email")}
        error={!!errors.email?.message}
        {...register("email")}
        placeholder={"E-mail"}
      />

     
    
        <Button  type="submit" variant="contained">
          Recuperar Senha
        </Button>
    
        <Button onClick={handleMainMenu} variant="contained">
          Volte ao menu
        </Button>

    </Container>
  );
};

export default LostAccountForm;
