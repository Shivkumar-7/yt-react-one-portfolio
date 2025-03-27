import React, { useState, useEffect } from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const [role, setRole] = useState(" Full Stack Developer");

  useEffect(() => {
    const roles = [" Full Stack Developer", " Competitive Programmer"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setRole(roles[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a 
            <span className="text-cyan-400 transition-opacity duration-1000 ease-in-out min-w-[250px] inline-block text-center">{role}</span>
          </h2>
     <br></br>
          <p className="text-gray-500 py-4 max-w-md">
            I am fluent in <span className="text-blue-400 font-semibold">C</span>, <span className="text-green-400 font-semibold">C++</span>, <span className="text-yellow-400 font-semibold">JavaScript</span>, and <span className="text-purple-400 font-semibold">Java</span>.
          </p>

          <p className="text-gray-500 py-4 max-w-md">
            My field of interest includes building new <span className="text-pink-400 font-semibold">Web Technologies</span> and solving complex algorithm problems
            and currently learning <span className="text-orange-400 font-semibold">Machine Learning</span>.
          </p>

          <p className="text-gray-500 py-4 max-w-md">
            I also like to develop products with <span className="text-red-400 font-semibold">Node.js</span> and modern JavaScript libraries and frameworks like <span className="text-indigo-400 font-semibold">React.js</span> and <span className="text-teal-400 font-semibold">Next.js</span>.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-2/3 max-h-900"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
