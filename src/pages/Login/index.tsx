import { Button, Paper, TextField, Typography } from "@mui/material";

const Login = () => {
  return (
    <Paper
      component="form"
      sx={{ display: "flex", flexDirection: "column", p: 2, width: "100%", maxWidth: "sm", mx: "auto", my: 2 }}
    >
      <Typography variant="h6" color="initial">
        Se connecter à Hack'48
      </Typography>
      <TextField margin="normal" label="Nom d'utilisateur" />
      <TextField margin="normal" label="Mot de passe" />
      <Button variant="contained" sx={{ my: 2 }}>
        Se connecter
      </Button>
    </Paper>
  );
};

export default Login;
