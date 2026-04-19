import { projects } from "../data/data";
type ProjectProps = {
  showAll: boolean;
};
const Project = ({ showAll }: ProjectProps) => {
  const visibleProjects = showAll ? projects : projects.slice(0, 6);
  
  return (
    <>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-Sr-No">{project.id}</div>
            <img src={project.image} alt={project.name} className="project-img" />
            <div className="z-10 p-5 flex flex-col flex-grow">
              <div className="py-2">
                <h3 className="h3-project">{project.name}</h3>
              </div>

              <p className="para project-details">
                {project.description}
              </p>
               <div className="flex-grow" />
              <div className="flex flex-wrap gap-2 mt-3">
  {project.techStack.map((tech, index) => (
    <span
      key={index}
      className="px-3 py-1 text-xs rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 capitalize"
    >
      {tech}
    </span>
  ))}
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
