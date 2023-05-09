import { Grid, Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import FormInput from "../FormInput";
import FormSubmit from "../FormSubmit";
import axios from "axios";
import { useAuth } from "../../providers/AuthProvider";
import { API_URL } from "../../conf";
import FormText from "../FormText";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

type Inputs = {
  leaderId: string;
  name: string;
  description: string;
};

const TeamForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => createTeam(data);

  const navigate = useNavigate();

  const { token } = useAuth();

  const createTeam = async (body: Inputs) => {
    const leaderId = jwtDecode<{ id: string }>(token!).id;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const res = await axios.post(`${API_URL}/teams`, { ...body, leaderId }, config);
      if (res.status === 201) {
        navigate("/teams");
      }
    } catch (e: unknown) {
      const err = e as Error;
      console.error(err);
    }
  };

  return (
    <Box maxWidth="md" margin="auto">
      <Typography gutterBottom variant="h5" component="h2" fontWeight={600}>
        Créer une équipe
      </Typography>
      <Typography variant="body1" mb={5}>
        Porem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Grid container component="form" onSubmit={handleSubmit(onSubmit)} spacing={2}>
        <Grid item xs={12}>
          <FormInput
            label="Nom"
            helperText={errors.name?.message ? errors.name.message : " "}
            error={!!errors.name}
            register={register("name")}
          />
        </Grid>
        <Grid item xs={12}>
          <FormText
            label="Description"
            helperText={errors.description?.message ? errors.description.message : " "}
            error={!!errors.description}
            register={register("description")}
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ textAlign: "center" }} margin="auto">
          <FormSubmit>Créer l'équipe</FormSubmit>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TeamForm;
