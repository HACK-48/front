import { Container } from "@mui/material";
import RoundButton from "../../components/RoundButton";
import { useNavigate } from "react-router-dom";

const Teams = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="xl"
      sx={{
        my: "120px",
      }}
    >
      <RoundButton
        sx={{
          background: "#4D7ABD",
          color: "#fff",

          ":hover": {
            background: "#1E4784",
          },
        }}
        onClick={() => navigate("/teams/create")}
      >
        Je crée mon équipe
      </RoundButton>
    </Container>
  );
};

export default Teams;
