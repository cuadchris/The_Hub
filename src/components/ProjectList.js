import './ProjectList.css';

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.length === 0 ? (
        <p>No projects yet</p>
      ) : (
        projects.map((project) => <div key={project.id}>{project.name}</div>)
      )}
    </div>
  );
};
export default ProjectList;
