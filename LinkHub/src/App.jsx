import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const App = () => {
  // ------------ DATA-------------
  const data = [
    {
      id: 1,
      icon: <FaTelegramPlane size={25} />,
      name: "Telegram",
      url: "Paste Telegram link",
    },
    {
      id: 2,
      icon: <AiFillInstagram size={26} />,
      name: "Instagram",
      url: "Paste Instagram link",
    },
    {
      id: 3,
      icon: <FaLinkedin size={25} />,
      name: "Linkedin",
      url: "Paste LinkedIn link",
    },
  ];
  // ------------ DATA-------------
  return (
    <div className="gradient-background flex items-center justify-center flex-col">
      {/* ----------- Animations-------START */}
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      {/* ------------- Animations-------END */}
      <div className=" flex items-center justify-center flex-col ">
        {/* ------------- IMAGE ----- START */}
        <div className=" flex items-center justify-center gap-2 flex-col">
          <img
            className=" mix-blend-difference w-[100px] rounded-full bg-black "
            src="https://i.postimg.cc/NMzp0vvs/vecteezy-letter-at-logo-design-free-vector-file-9658784.jpg"
            alt=""
          />
          <h2 className=" text-white text-[1.65rem] font-bold">
            AlphaSpace
          </h2>
          <div className=" w-[360px] text-center">
            <p className=" text-white text-[1rem] font-medium">
              Freelancing | Web Development | App Development | UI/UX Design
            </p>
          </div>
        </div>
        {/* ----------- IMAGE ----- END */}
        {/* -------------- SOCIAL LINKS ---- START */}
        <div className=" mt-8 space-y-4">
          {/* ------------ CARDS ----- START */}

          {data.map((i) => (
            <Link
              to={i.url}
              target="_blank"
              key={i.id}
              className=" flex items-center gap-2 w-[320px] bg-white bg-opacity-20 border border-white text-white backdrop-blur-lg rounded drop-shadow-lg p-3 px-4 cursor-pointer hover:bg-opacity-40"
            >
              {i.icon}
              <p className=" font-medium ">{i.name}</p>
            </Link>
          ))}

          {/* ------- Fiver and Upwork Link START ---------- */}
          <div className=" z-40 flex items-center justify-between space-x-3 ">
            <Link
              to={"www.google.com"}
              className="flex-1 flex items-center gap-2 bg-white bg-opacity-20 border border-white text-white backdrop-blur-lg rounded drop-shadow-lg p-3 px-4 cursor-pointer hover:bg-opacity-40 font-medium text-center"
            >
              <img
                width={29}
                src="https://i.postimg.cc/134dkRYT/CITYPNG-COM-Fiverr-Round-White-Logo-Icon-2756x2346.png"
                alt=""
              />
              Fiverr
            </Link>
            <Link className="flex-1 flex items-center gap-2 bg-white bg-opacity-20 border border-white text-white backdrop-blur-lg rounded drop-shadow-lg p-3 px-4 cursor-pointer hover:bg-opacity-40 font-medium text-center">
              <img
                width={27}
                src="https://i.postimg.cc/ht4NXpWY/CITYPNG-COM-Upwork-Round-White-Logo-Icon-FREE-PNG-2703x2559.png"
                alt=""
              />
              Upwork
            </Link>
          </div>
          {/* ------- Fiver and Upwork Link END ---------- */}
          {/* --------- CARDS ----- END */}
        </div>
        {/* -------- SOCIAL LINKS ---- END */}

        <div className=" w-[320px] text-justify mt-6 text-[10.38px] text-white">
          <p>
            * If the Telegram link doesn't work, you can scan the Telegram QR
            Code mentioned in Instagram Highlights section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
