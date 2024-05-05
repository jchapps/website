import InfoItem from "@/components/InfoItem";
import Title from "@/components/Title";

const intro =
  "Hello, I'm Josh, a software engineer living and working in Japan. I primarily focus on front-end development but recently have found myself playing around with the back-end too.";

const intro2 =
  "I plan to add more content here soon including, but not limited to, projects, blog posts and general shithousery.";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 max-laptop:grid-cols-2 gap-x-5">
        <div className="w-full  max-laptop:col-span-2">
          <Title>いらっしゃいませ</Title>
          <InfoItem>{intro}</InfoItem>
          <InfoItem>{intro2}</InfoItem>
        </div>
        <div className="max-laptop:pt-8">
          <Title href="/blog">Recent Posts</Title>
          <InfoItem>{"٩꒰ʘʚʘ๑꒱۶ Interesting blogs coming soon"}</InfoItem>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="pt-8">
          <Title href="/projects">Projects</Title>
          <InfoItem>{"Cool projects coming soon(⁄ ⁄•⁄ω⁄•⁄ ⁄)"}</InfoItem>
        </div>
      </div>
    </>
  );
}
