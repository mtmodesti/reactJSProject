import RegisterModalForm from "../modal";
import { Container, ImagemBg, FormMenu } from "./style";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import React from "react";
import { Button } from "@mui/material";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import Form from "../form";

const Main = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <Container>
      <FormMenu>
        <h1>Panzer</h1>

        <Form />
      </FormMenu>
      <ImagemBg></ImagemBg>
    </Container>
  );
};

export default Main;
