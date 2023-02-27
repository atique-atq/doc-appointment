import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import bgImage from "../../assets/images/home-banner.jpeg";

const Home = () => {
  return (
    <div
      className="flex flex-col md:flex-row md:justify-between md:justify-between mt-0 md:mt-12 p-5 mx-2 md:mx-20"
      style={{ minHeight: "100vh" }}
    >
      <div className="mr-6 text-center md:text-left">
        <h1 className="text-xl font-medium tracking-tight pt-12 mt-8 md:mt-18">
          <TypeAnimation
            sequence={["Welcome to", 2200, "DocAppointmentBD", 2000, ]}
            //  Continuing previous Text
            style={{ fontSize: "2em" }}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
          .
        </h1>
        <h2 className="mt-6 text-xl ">
          No more phone calls to get the doctors appointments. From our service, book appointment of your physician online! Anywhere, Anytime!!
        </h2>
        <Link to="/appointment">
          <div className="mt-4 w-48 text-xl font-bold text-info border border-2 border-info rounded-lg px-2 py-1 hover:bg-blue-500 hover:cursor-pointer">
            Get Appointment
          </div>
        </Link>
      </div>

      <div className="w-full md:w-6/12 mt-20 flex justify-center  md:mt-1 md:ml">
        <img className="h-72 md:h-96 rounded-xl" src={bgImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
