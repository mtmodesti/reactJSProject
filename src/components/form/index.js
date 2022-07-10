import { Container } from "./styles";
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
  name: yup
    .string()
    .required("Name required")
    .matches("^[ a-zA-Z á]*$", "Only letters"),
  email: yup.string().required("E-mail required").email("invalid e-mail"),
  password: yup
    .string()
    .required("Password required")
    .min(6, "6 caracters minimum")
    .matches(
      "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$",
      "Senha fraca"
    ),
  confPassword: yup
    .string()
    .required("Confirmation required")
    .min(6, "minimum 6 caracters")
    .oneOf([yup.ref("password"), null], "Password must match"),
});

const Form = ({ closeModalFunction }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      confPassword: data.confPassword,
    };
    navigate("/dashboard");
    console.log(data);
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

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
        <h3>Insert your infos</h3>
        <span onClick={closeModalFunction}>X</span>
      </header>

      <TextField
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        label="name"
        name="name"
        helperText={errors.name?.message}
        {...register("name")}
        error={!!errors.name?.message}
        {...register("name")}
        placeholder={"Name"}
      />

      <TextField
        fullWidth
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
        fullWidth
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
        fullWidth
        label="Confirm password"
        name="confPassword"
        helperText={errors.confPassword?.message}
        error={!!errors.confPassword?.message}
        {...register("confPassword")}
        placeholder={"Confirm Password"}
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

      <Button type="submit" variant="contained">
        Confirm
      </Button>
    </Container>
  );
};

export default Form;
