import { Box, Grid, Link, Typography } from "@mui/material";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import FormInput from "../FormInput";
import FormSubmit from "../FormSubmit";
import useToken from "../../hooks/useToken";
import axios from "axios";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => logIn(data);
  const password = useRef({});
  password.current = watch("password", "");

  const navigate = useNavigate();

  const { persist } = useToken();

  const logIn = async (body: Inputs) => {
    try {
      const logInRes = await axios.post("https://hack48-api.osc-fr1.scalingo.io/api/v1/login", {
        Mail: body.email,
        password: body.password,
      });
      persist(logInRes.data.token);
      navigate("/");
    } catch (e: unknown) {
      const err = e as Error;
      console.error(err);
    }
  };

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
      <Grid container component="form" onSubmit={handleSubmit(onSubmit)} spacing={2}>
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
          />
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center" }} margin="auto">
          <FormSubmit>Connexion</FormSubmit>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
