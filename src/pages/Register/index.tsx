import { Button, Paper, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import FormInput from "../../components/form/FormInput";

type Inputs = {
  pseudo: string;
  email: string;
  firstName: string;
  lastName: string;
  age: string;
  password: string;
  passwordConfirm: string;
};

const Register = () => {
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
    <Paper
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", p: 2, width: "100%", maxWidth: "sm", mx: "auto", my: 2 }}
    >
      <FormInput
        label="Text"
        required={true}
        helperText={errors.pseudo?.message ? errors.pseudo.message : " "}
        error={!!errors.pseudo}
        register={register("pseudo", { required: { value: true, message: "Ce champs est requis" } })}
      />

      <>
        <Typography component="label" variant="body1">
          Text *
        </Typography>
        <TextField
          helperText={errors.pseudo ? errors.pseudo.message : " "}
          {...register("pseudo", { required: { value: true, message: "Ce champs est requis" } })}
          error={!!errors.pseudo}
        />
      </>

      <TextField
        type="email"
        helperText={errors.email ? errors.email.message : " "}
        {...register("email", {
          required: { value: true, message: "Ce champs est requis" },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Adresse email invalide",
          },
        })}
        error={!!errors.email}
        margin="dense"
        label="Email"
      />
      <TextField
        helperText={errors.lastName ? errors.lastName.message : " "}
        {...register("lastName")}
        error={!!errors.lastName}
        margin="dense"
        label="Nom"
      />
      <TextField
        helperText={errors.firstName ? errors.firstName.message : " "}
        {...register("firstName")}
        error={!!errors.firstName}
        margin="dense"
        label="Prénom"
      />
      <TextField
        helperText={errors.age ? errors.age.message : " "}
        {...register("age")}
        error={!!errors.age}
        margin="dense"
        label="Age"
      />
      <TextField
        type="password"
        helperText={errors.password ? errors.password.message : " "}
        {...register("password", { required: { value: true, message: "Ce champs est requis" } })}
        error={!!errors.password}
        margin="dense"
        label="Mot de passe"
      />
      <TextField
        type="password"
        helperText={errors.passwordConfirm ? errors.passwordConfirm.message : " "}
        {...register("passwordConfirm", {
          validate: (value) => value === password.current || "Les mots de passe ne correspondent pas.",
        })}
        error={!!errors.passwordConfirm}
        margin="dense"
        label="Confirmation de mot de passe"
      />
      <Button type="submit" variant="contained" sx={{ my: 2 }}>
        Se connecter
      </Button>
    </Paper>
  );
};

export default Register;
