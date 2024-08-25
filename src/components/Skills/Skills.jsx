import { Box, Typography, LinearProgress, Grid, Paper } from "@mui/material";

const skills = [
  { name: "HTML", proficiency: 90 },
  { name: "CSS", proficiency: 85 },
  { name: "JavaScript", proficiency: 80 },
  { name: "Bootstrap", proficiency: 75 },
  { name: "jQuery", proficiency: 70 },
  { name: "React JS", proficiency: 80 },
  { name: "Python", proficiency: 50 },
  { name: "SQL", proficiency: 50 },
  { name: "R", proficiency: 40 },
  { name: "Responsive Web Desiging", proficiency: 50 },
  { name: "Firebase", proficiency: 50 },
  { name: "Material UI", proficiency: 40 },
];

const Skill = ({ skill }) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" sx={{ mb: 1 }}>
      {skill.name}
    </Typography>
    <Typography variant="body2" sx={{ mb: 1 }}>
      Proficiency: {skill.proficiency}%
    </Typography>
    <LinearProgress
      variant="determinate"
      color="success"
      value={skill.proficiency}
      sx={{ height: 10, borderRadius: 5 }}
    />
  </Box>
);

const Skills = () => {
  return (
    <Paper elevation={24}>
      <Box sx={{ padding: 4, backgroundColor: "black", color: "white" }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
          My Skill Set
        </Typography>
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
              <Skill skill={skill} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

export default Skills;
