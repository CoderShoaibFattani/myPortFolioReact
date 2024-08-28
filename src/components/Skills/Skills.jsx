/* eslint-disable react/prop-types */
import { Box, Typography, LinearProgress, Grid, Paper } from "@mui/material";

const webDevSkills = [
  { name: "HTML", proficiency: 90 },
  { name: "CSS", proficiency: 85 },
  { name: "JavaScript", proficiency: 80 },
  { name: "Bootstrap", proficiency: 75 },
  { name: "jQuery", proficiency: 50 },
  { name: "React JS", proficiency: 75 },
  { name: "Responsive Web Desiging", proficiency: 80 },
  { name: "Firebase Authentication and Database", proficiency: 50 },
  { name: "Material UI", proficiency: 40 },
  { name: "Web Deployment", proficiency: 60 },
  { name: "Git and Github", proficiency: 40 },
];

const dataAnalyticsSkills = [
  { name: "Python", proficiency: 50 },
  { name: "SQL", proficiency: 50 },
  { name: "R", proficiency: 40 },
  { name: "Power BI", proficiency: 50 },
  { name: "Tableau", proficiency: 50 },
];

const Skill = ({ skill }) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" sx={{ mb: 1 }}>
      {skill.name}
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
    <Paper elevation={24} sx={{ marginBottom: "10px" }}>
      <Box sx={{ padding: 4, backgroundColor: "black", color: "white" }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
          My Skill Set
        </Typography>
        <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
          Web Designing & Development
        </Typography>
        <Grid container spacing={3}>
          {webDevSkills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
              <Skill skill={skill} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ padding: 4, backgroundColor: "black", color: "white" }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
          Data Analytics & Business Intelligence
        </Typography>
        <Grid container spacing={3}>
          {dataAnalyticsSkills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
              <Skill skill={skill} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

export default Skills;
