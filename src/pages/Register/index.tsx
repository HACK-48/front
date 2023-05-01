import { Container } from "@mui/material";
import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        my: "120px",
      }}
    >
      <RegisterForm />
    </Container>
  );
};

export default Register;
