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

const formSchema = yup.object().shape({
  email: yup.string().required("E-mail required").email("invalid e-mail"),
  password: yup
    .string()
    .required("Password required")
    .min(6, "6 caracters minimum")
    .matches(
      "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$",
      "Weak password"
    ),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const registerNavigate = () => {
    navigate("/register");

  }

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

      <TextField
        color="success"
        fullWidth
        label="Password"
        helperText={errors.password?.message}
        error={!!errors.password?.message}
        {...register("password")}
        placeholder={"Password"}
        
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
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

      <Button type="submit" variant="contained">
        Login
      </Button>
<DivBtn>

      <Button 
      onClick={registerNavigate}
      variant="contained">
        Registre-se
      </Button>
</DivBtn>

    </Container>
  );
};

export default Form;
