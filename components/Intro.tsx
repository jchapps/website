import InfoItem from "./InfoItem";
import Title from "./Title";

const intro =
  "Hello, I'm Josh, a software engineer living and working in Japan. I primarily focus on front-end development but recently have found myself playing around with the back-end too.";

const intro2 =
  "I plan to add more content here soon including, but not limited to, projects, blog posts and general shithousery.";

const Intro: React.FunctionComponent = () => {
  return (
    <div className="w-full  max-laptop:col-span-2">
      <Title>いらっしゃいませ</Title>
      <InfoItem className="pt-7 ">{intro}</InfoItem>
      <InfoItem className="pt-7 ">{intro2}</InfoItem>
    </div>
  );
};

export default Intro;
