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
    </>
  );
}
