/* eslint-disable react/prop-types */
import {
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";

const projects = [
  {
    title: "Calculator App",
    description:
      'Calculator app is the assignment project of the "The Odin Project 2021" course and I tried to create the calculator app. this might not be the perfect calculator app you are already using but it does all the basic functionality of calculator',
    siteUrl: "https://calculator-theta-black.vercel.app/",
    repoUrl: "https://github.com/CoderShoaibFattani/Calculator.git",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my skills and projects.",
    siteUrl: "https://portfolio-example.com",
    repoUrl: "https://github.com/CoderShoaibFattani/myPortFolioReact.git",
    technologies: ["React JS", "CSS", "Material UI"],
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "Created legandary Tic Tac Toe Game using React JS for leaning and understanding React JS and its functionality.",
    siteUrl: "https://tic-tac-toe-5478d.web.app/",
    repoUrl: "https://github.com/CoderShoaibFattani/Tic-Tac-Toe-React.git",
    technologies: ["React JS", "CSS"],
  },
  {
    title: "To Do Application",
    description:
      "Created to do app and that allows user to add tasks and upon adding tasks, the user can edit the task and delete the task, all the crud operatioins performed by user upon clicking are stored in firebase firestore.",
    siteUrl: "https://to-do-app-with-firebase.vercel.app/",
    repoUrl: "https://github.com/CoderShoaibFattani/toDoAppWithFirebase.git",
    technologies: ["React JS", "Firebase", "Material UI"],
  },
  {
    title: "Login SignUp With Auth",
    description:
      "Created Login, Sign Up pages using React + Vite, Roting is done with React Router DOM and login sign up functionality is achieved using Firebase Authentication getAuth method",
    siteUrl: "https://react-firebase-auth-9d8fb.web.app/",
    repoUrl: "https://github.com/CoderShoaibFattani/React-Firebase-Auth.git",
    technologies: ["React JS", "CSS", "Firebase"],
  },
  {
    title: "Rock Paper Scissors",
    description:
      "Created rock-paper-scissors game using javascript only. created three functions one to generate random response from computer created one function to play round created one main function for game nested play round, this project was made as an assignment to 'The Odin Project 2021 Foundation Course Program'",
    siteUrl: "https://rock-paper-scissors-game-wine-three.vercel.app/",
    repoUrl:
      "https://github.com/CoderShoaibFattani/rock-paper-scissors-game.git",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const Project = ({ project }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortDescription = project.description.substring(0, 50);
  return (
    <Card
      sx={{ width: "100%", mb: 3, backgroundColor: "#333", color: "white" }}
    >
      <Box
        component="img"
        sx={{ height: 140, width: "100%", objectFit: "cover" }}
        alt={project.title}
        src={`https://api.microlink.io?url=${encodeURIComponent(
          project.siteUrl
        )}&screenshot=true&embed=screenshot.url`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="white">
          {showFullDescription
            ? project.description
            : shortDescription + (project.description.length > 50 ? "..." : "")}
        </Typography>
        {project.description.length > 50 && (
          <Typography
            variant="body2"
            color="primary"
            sx={{ mt: 2, cursor: "pointer" }}
            onClick={toggleDescription}
          >
            {showFullDescription ? "Close" : "Learn More"}
          </Typography>
        )}
        <Typography variant="body2" color="white" sx={{ mt: 2 }}>
          <strong>Technologies:</strong> {project.technologies.join(", ")}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          size="small"
          color="primary"
          href={project.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SendIcon />
        </Button>
        <Button
          size="small"
          color="primary"
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

const Projects = () => {
  return (
    <Paper elevation={24} sx={{ marginBottom: "10px" }}>
      <Box sx={{ padding: 4, backgroundColor: "black", color: "white" }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
          My Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
              <Project project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

export default Projects;
