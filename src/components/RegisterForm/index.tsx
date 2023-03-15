import { Button, Grid, Link, Typography, Box } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Link as RouterLink } from "react-router-dom";
import FormInput from "../FormInput";
import FormSubmit from "../FormSubmit";

type Inputs = {
  pseudo: string;
  email: string;
  firstName: string;
  lastName: string;
  age: string;
  password: string;
  passwordConfirm: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const password = useRef({});
  password.current = watch("password", "");

  return (
    <Box maxWidth="md" margin="auto">
      <Typography gutterBottom variant="h5" component="h2" fontWeight={600}>
        S'inscrire
      </Typography>
      <Typography variant="body1" mb={5}>
        Porem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Grid container component="form" onSubmit={handleSubmit(onSubmit)} spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormInput
            label="Nom"
            required={true}
            helperText={errors.lastName?.message ? errors.lastName.message : " "}
            error={!!errors.lastName}
            register={register("lastName", { required: { value: true, message: "Ce champs est requis" } })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInput
            label="Prénom"
            required={true}
            helperText={errors.firstName?.message ? errors.firstName.message : " "}
            error={!!errors.firstName}
            register={register("firstName", { required: { value: true, message: "Ce champs est requis" } })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
          <FormInput
            label="Pseudo"
            required={true}
            helperText={errors.pseudo?.message ? errors.pseudo.message : " "}
            error={!!errors.pseudo}
            register={register("pseudo", { required: { value: true, message: "Ce champs est requis" } })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInput
            label="Mot de passe"
            type="password"
            required={true}
            helperText={errors.password?.message ? errors.password.message : " "}
            error={!!errors.password}
            register={register("password", { required: { value: true, message: "Ce champs est requis" } })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInput
            label="Confirmer mot de passe"
            type="password"
            required={true}
            helperText={errors.passwordConfirm?.message ? errors.passwordConfirm.message : " "}
            error={!!errors.passwordConfirm}
            register={register("passwordConfirm", {
              required: { value: true, message: "Ce champs est requis" },
              validate: (value) => value === password.current || "Les mots de passe ne correspondent pas.",
            })}
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ textAlign: "center" }} margin="auto">
          <FormSubmit>Connexion</FormSubmit>
          <Link color={"#000"} component={RouterLink} to={"/login"}>
            Déjà un compte ?
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterForm;
