import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 pt-16"
    >
      <div className="max-w-[1000px] mx-auto p-4">
        <div className="sm:grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="sm:grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-4xl font-bold">
            <p>
              Welcome, I'm thrilled you're here. Feel free to explore and unlock
              the creative possibilities we can embark on together.
            </p>
            <div className="sm:hidden mt-4"></div> 
          </div>
          <div>
            <p>
              I'm currently a final year BTech student pursuing a degree in
              Artificial Intelligence at Mahindra University. I'm interested in
              web development, and I'm familiar with front-end technologies. I
              enjoy creating websites that work well on different devices and
              engage users. I focus on making websites that are responsive and
              perform efficiently. One of my strengths is solving problems. I
              break down tough issues into manageable parts and come up with
              creative solutions. This skill has been really helpful in my
              journey as a developer. Most importantly, I'm passionate about
              creating software that not only meets but exceeds expectations. I
              believe technology can change industries and improve lives, and I
              want to be a part of that change. As I continue in my career, I'm
              excited to take on new challenges and keep learning in the
              ever-changing tech world. My goal is to use my skills and
              knowledge to make a positive impact through software development
              and artificial intelligence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
