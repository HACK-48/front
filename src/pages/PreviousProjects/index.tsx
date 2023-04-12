import { Container, Typography } from "@mui/material";
import ProjectCard from "../../components/ProjectCard";

const PreviousProjects = () => {
  const testDesc = ` Nisi laborum esse ex tempor. Fugiat nulla culpa mollit duis ut ut
  eiusmod. Proident et sit deserunt labore do in nisi. Officia id
  commodo magna elit laborum ipsum commodo elit nisi voluptate. Sint
  nostrud et proident aliqua do ea ad adipisicing sunt laboris. Sint
  et consectetur do sint labore cillum laboris cupidatat occaecat
  fugiat Lorem adipisicing officia. In ea adipisicing minim velit
  officia nulla. Quis est occaecat magna excepteur et ea fugiat
  exercitation.`;

  const projects = [
    {
      title: "Equipe 1",
      description: testDesc,
      img: "https://picsum.photos/200/300",
      link: "/",
      rank: 2,
    },
    {
      title: "Equipe 3",
      description: testDesc,
      img: "https://picsum.photos/200/300",
      link: "/",
      rank: 3,
    },
    {
      title: "Equipe 4",
      description: testDesc,
      img: "https://picsum.photos/200/300",
      link: "/",
      rank: 1,
    },
    {
      title: "Equipe 5",
      description: testDesc,
      img: "https://picsum.photos/200/300",
      link: "/",
      rank: 2,
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        mb: "120px",
      }}
    >
      <Typography variant="h1" align="center" my="100px">
        Projets Passés
      </Typography>
      <Typography
        variant="body2"
        sx={{
          borderBottom: "1px solid",
          pb: 1,
          mb: 5,
        }}
      >
        Hackaton du 24 février 2022
      </Typography>

      {projects.map((props) => (
        <ProjectCard {...props} />
      ))}
    </Container>
  );
};

export default PreviousProjects;
