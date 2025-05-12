import { projects } from "../data/data";
const Project = () => {
  return (
    <>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-Sr-No">{project.id}</div>
            <img src={project.image} alt={project.name} className="project-img" />
            <div className="z-10 p-5">
              <div className="heading-section">
                <h3 className="h3">{project.name}</h3>
              </div>

              <p className="para project-details">
                {project.description}
              </p>
              <div className="project-tec">
                {project.techStack}
              </div>
              {/* <form className="flex h-24 items-center justify-center">
                    <button className="btn btn-red">More Details</button>
                  </form> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
