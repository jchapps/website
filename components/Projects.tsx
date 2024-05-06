import InfoItem from "./InfoItem";
import Title from "./Title";

const Projects: React.FunctionComponent = () => {
  return (
    <div className="pt-8">
      <Title href="/projects">Projects</Title>
      <InfoItem className="pt-7 ">
        {"Cool projects coming soon(⁄ ⁄•⁄ω⁄•⁄ ⁄)"}
      </InfoItem>
    </div>
  );
};

export default Projects;
