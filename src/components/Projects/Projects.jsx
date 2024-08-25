// import ResponsiveAppBar from "../MUIComponents/ResponsiveAppBar";

function Projects() {
  const projects = [
    { name: "Todo App", description: "A simple todo list using React hooks" },
    { name: "Weather App", description: "Fetches weather data from an API" },
    {
      name: "Portfolio Website",
      description: "This website you're viewing now!",
    },
  ];

  return (
    <div className="projects">
      {/* <ResponsiveAppBar /> */}
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
