import { Container, DivBtn } from "./styles";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EditLocationIcon from "@mui/icons-material/EditLocation";

const formSchema = yup.object().shape({
  cep: yup
    .string()
    .required("CEP obrigatório")
    .matches("^[0-9]+$", "Apenas números"),
  nome: yup
    .string()
    .required("Nome obrigatório")
    .matches("^[ a-zA-Z á]*$", "Somente letras"),
  telefone: yup.string().required("Telefone obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),

  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "6 caracters minimum")
    .matches(
      "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$",
      "Senha fraca"
    ),
  confPassword: yup
    .string()
    .required("Confirmação obrigatória")
    .min(6, "minimum 6 caracters")
    .oneOf([yup.ref("password"), null], "Senhas precisam coincidir"),
});

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const registerNavigate = () => {
    navigate("/register");
  };

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    };
    //navigate("/dashboard");
    console.log(data);
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
        <h3>Preencha seus dados e acesse sua conta</h3>
      </header>

      <TextField
      style={{ width: "250px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        label="nome"
        name="nome"
        helperText={errors.nome?.message}
        {...register("nome")}
        error={!!errors.nome?.message}
        {...register("nome")}
        placeholder={"Nome completo"}
      />

      <TextField
       style={{ width: "250px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        label="email"
        name="email"
        helperText={errors.email?.message}
        {...register("email")}
        error={!!errors.email?.message}
        {...register("email")}
        placeholder={"E-mail"}
      />

      <TextField
       style={{ width: "250px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneEnabledIcon />
            </InputAdornment>
          ),
        }}
        label="telefone"
        name="telefone"
        helperText={errors.telefone?.message}
        {...register("telefone")}
        error={!!errors.telefone?.message}
        {...register("telefone")}
        placeholder={"telefone completo"}
      />

      <TextField
       style={{ width: "250px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EditLocationIcon />
            </InputAdornment>
          ),
        }}
        label="cep"
        name="cep"
        helperText={errors.cep?.message}
        {...register("cep")}
        error={!!errors.cep?.message}
        {...register("cep")}
        placeholder={"cep completo"}
      />

      <TextField
       style={{ width: "250px" }}
        label="password"
        name="password"
        helperText={errors.password?.message}
        error={!!errors.password?.message}
        {...register("password")}
        placeholder={"Password"}
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <RemoveRedEyeOutlinedIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
       style={{ width: "250px" }}
        label="Confirmação de senha"
        name="Confirmação de senha"
        helperText={errors.confPassword?.message}
        error={!!errors.confPassword?.message}
        {...register("confPassword")}
        placeholder={"Confirmação de senha"}
        type={showConfPassowrd ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowConfPassword}
                onMouseDown={handleMouseDownConfPassword}
              >
                {showConfPassowrd ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <RemoveRedEyeOutlinedIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button style={{ width: "80%" }} type="submit" variant="contained">
        Login
      </Button>
    </Container>
  );
};

export default FormRegister;
