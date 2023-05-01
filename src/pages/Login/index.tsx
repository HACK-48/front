import { Container } from "@mui/material";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        my: "120px",
      }}
    >
      <LoginForm />
    </Container>
  );
};

export default Login;
