import { Box, Grid, Link, Typography } from "@mui/material";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import FormInput from "../FormInput";
import FormSubmit from "../FormSubmit";
import axios from "axios";
import React from "react";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [error, setError] = React.useState('');
  const url = `http://localhost:8080/api/v1/login`;
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async(values, event) => {
    event?.preventDefault();

    try {
      const response = await axios.post(url, values);
  
      if (response.status === 201) {
        localStorage.setItem("token", response.data.token);
        navigate('/');
      }
    } catch(error: any) {
      setError(error.message);
    }
  });

  const errorsDisplayer = () => {
    if (error) {
      return (
        <p style={{color: "red"}}>{error}</p>
      )
    }
  }

  return (
    <Box maxWidth="sm" margin="auto">
      <Typography gutterBottom variant="h5" component="h2" fontWeight={600}>
        Connectez-vous
      </Typography>
      <Typography variant="body1" mb={5}>
        Vous êtes nouveau ?{" "}
        <Link color={"#000"} component={RouterLink} to={"/register"}>
          inscrivez-vous
        </Link>
      </Typography>
      <Grid
        container
        component="form"
        onSubmit={onSubmit}
        spacing={2}
      >
        <Grid item xs={12}>
          <FormInput
            label="Email"
            type="email"
            required={true}
            helperText={errors.email?.message ? errors.email.message : " "}
            error={!!errors.email}
            register={register("email", {
              required: { value: true, message: "Ce champs est requis" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Adresse email invalide",
              },
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <FormInput
            label="Mot de passe"
            type="password"
            required={true}
            helperText={
              <Link color={"#000"} component={RouterLink} to={"/login"}>
                Mot de passe oublié ?
              </Link>
            }
            register={register("password", {
              required: { value: true, message: "Ce champs est requis" },
            })}
          />
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center" }} margin="auto">
          <FormSubmit>Connexion</FormSubmit>
        </Grid>
      </Grid>
      {errorsDisplayer()}
    </Box>
  );
};

export default LoginForm;
