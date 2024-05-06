import Blogs from "@/components/Blogs";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 max-laptop:grid-cols-1 gap-x-5">
        <Intro />
        <Blogs />
      </div>
      <Projects />
      <p className="m-16 relative group">
        <span>Hover over me</span>
        <span className="absolute left-0 -bottom-1 w-full h-2 bg-secondary -z-10 group-hover:h-full group-hover:transition-all"></span>
      </p>
    </>
  );
}
