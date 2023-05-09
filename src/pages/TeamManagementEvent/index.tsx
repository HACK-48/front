import { Container } from "@mui/material";
import ChooseTeamSection from "./Sections/ChooseTeamSection";
import TeamToolSection from "./Sections/TeamToolSection";

export default function TeamManagementEventPage() {
  return (
    <Container maxWidth="xl" sx={{ my: "120px" }}>
      <TeamToolSection></TeamToolSection>
      <ChooseTeamSection></ChooseTeamSection>
    </Container>
  );
}
