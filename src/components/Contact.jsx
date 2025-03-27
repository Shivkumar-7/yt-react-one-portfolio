import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const linkedin = () => window.open("https://www.linkedin.com/in/shiv-kumar-6ab079263/", "_blank");
  const github = () => window.open("https://github.com/Shivkumar-7/Shivkumar-7", "_blank");
  const instagram = () => window.open("https://instagram.com/shivthakur_292", "_blank");

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-4xl font-bold text-teal-500">Let's Connect 🤝</p>
        </div>

        <div className="flex space-x-6 mb-4">
          <FaLinkedin onClick={linkedin} size={40} className="cursor-pointer hover:text-blue-600" />
          <FaInstagram onClick={instagram} size={40} className="cursor-pointer hover:text-pink-500" />
          <FaGithub onClick={github} size={40} className="cursor-pointer hover:text-gray-700" />
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
