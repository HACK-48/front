import { Container } from "@mui/material";
import TeamForm from "../../components/TeamForm";

const TeamCreate = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        my: "120px",
      }}
    >
      <TeamForm />
    </Container>
  );
};

export default TeamCreate;
