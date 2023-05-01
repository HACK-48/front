import { Grid, Link, Typography, Box } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import FormSubmit from "../FormSubmit";
import { SectorOptions } from "./sectors";
import axios from "axios";
import { useAuth } from "../../providers/AuthProvider";

type Inputs = {
  pseudo: string;
  mail: string;
  firstname: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
  sector: typeof SectorOptions;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => signIn(data);
  const password = useRef({});
  password.current = watch("password", "");

  const navigate = useNavigate();

  const { persist } = useAuth();

  const signIn = async (body: Inputs) => {
    try {
      const signInRes = await axios.post("https://hack48-api.osc-fr1.scalingo.io/api/v1/register", body);
      if (signInRes.status === 201) {
        const logInRes = await axios.post("https://hack48-api.osc-fr1.scalingo.io/api/v1/login", {
          mail: body.mail,
          password: body.password,
        });
        persist(logInRes.data.token);
        navigate("/");
      }
    } catch (e: unknown) {
      const err = e as Error;
      console.error(err);
    }
  };

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
            helperText={errors.lastName?.message ? errors.lastName.message : " "}
            error={!!errors.lastName}
            register={register("lastName")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInput
            label="Prénom"
            helperText={errors.firstname?.message ? errors.firstname.message : " "}
            error={!!errors.firstname}
            register={register("firstname")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInput
            label="mail"
            type="email"
            required={true}
            helperText={errors.mail?.message ? errors.mail.message : " "}
            error={!!errors.mail}
            register={register("mail", {
              required: { value: true, message: "Ce champs est requis" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Adresse mail invalide",
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
            register={register("pseudo", {
              required: { value: true, message: "Ce champs est requis" },
            })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInput
            label="Mot de passe"
            type="password"
            required={true}
            helperText={errors.password?.message ? errors.password.message : " "}
            error={!!errors.password}
            register={register("password", {
              required: { value: true, message: "Ce champs est requis" },
            })}
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
        <Grid item xs={12}>
          <FormSelect
            label="Filière"
            options={Object.entries(SectorOptions)}
            register={register("sector", { required: true })}
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ textAlign: "center" }} margin="auto">
          <FormSubmit>S'inscrire</FormSubmit>
          <Link color={"#000"} component={RouterLink} to={"/login"}>
            Déjà un compte ?
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterForm;
