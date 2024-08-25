import { Box, Grid, Paper, Typography } from "@mui/material";
// import ResponsiveAppBar from "../MUIComponents/ResponsiveAppBar";
import image from "../../assets/6V9A4832.JPG";

function About() {
  return (
    <Paper elevation={24} sx={{ marginBottom: "10px" }}>
      <Grid
        container
        sx={{
          margin: "50px, 0px",
          backgroundColor: "black",
          color: "white",
          height: {
            lg: "750",
            xl: "750",
            md: "100%",
            sm: "100%",
            xs: "100%",
          },
        }}
      >
        <Grid
          item
          lg={6}
          xl={6}
          md={12}
          sm={12}
          xs={12}
          sx={{ padding: "30px" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "30px",
              padding: "0px 30px",
            }}
          >
            <Typography variant="h1" component="h1" sx={{ fontSize: "2.2rem" }}>
              MUHAMMAD SHOAIB MUSHTAQ
            </Typography>
            <Typography variant="p" component="p" sx={{ fontSize: "1.6rem" }}>
              I am a passionate web developer currently diving deep into MERN
              stack development. With a solid foundation in HTML, CSS, and
              JavaScript, I’ve also gained hands-on experience working with
              popular libraries and frameworks like Bootstrap, jQuery, and React
              JS.
            </Typography>
            <Typography variant="p" component="p" sx={{ fontSize: "1.6rem" }}>
              My journey into the world of web development is unique—having
              completed my bachelors degree in Civil Engineering, I decided to
              pivot into the IT field, driven by a relentless curiosity and a
              desire to build things in the digital realm. Although I come from
              a non-tech background, I firmly believe that with the right
              mindset, dedication, and a strong work ethic, anything can be
              learned and mastered.
            </Typography>
            <Typography variant="p" component="p" sx={{ fontSize: "1.6rem" }}>
              As I continue to expand my skill set and take on new challenges, I
              am committed to growing as a developer and making a meaningful
              impact in the tech industry.
            </Typography>
          </Box>
        </Grid>
        <Grid
          lg={6}
          xl={6}
          md={12}
          sm={12}
          xs={12}
          sx={{
            padding: "30px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={image}
            alt=""
            width="90%"
            height="95%"
            style={{ borderRadius: "10px" }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default About;
