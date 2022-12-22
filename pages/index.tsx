import React from "react";

import ArrowDownIcon from "../assets/arrowDown.svg";
import EmailIcon from "../assets/email.svg";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import MenuIcon from "../assets/menu.svg";
import UnderlineDoodle from "../assets/underline.svg";
import Container from "../components/container";
import FloatingButton from "../components/FloatingButton";
import IconButton from "../components/iconButton";

//https://stackoverflow.com/questions/19484707/how-can-i-make-an-svg-scale-with-its-parent-container

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen font-inter">
      <Container className="flex shadow-md outline outline-1 outline-gray-200">
        <h1 className="font-bold">Denny Dharmawan</h1>
        <MenuIcon className="ml-auto text-gray-500" />
      </Container>
      <Container className="flex flex-col gap-12 my-12">
        <div className="flex flex-col text-5xl font-bold text-center">
          <p>Connecting Your Business to The</p>
          <div className="self-start mx-auto text-primary-pacific-600">
            Digital World.
            <div className="w-full">
              <UnderlineDoodle />
            </div>
          </div>
        </div>

        <p className="text-base text-gray-800">
          Hi, my name’s Denny Dharmawan. A software engineer with 5+ years
          experience in developing and maintaining websites. I possess a strong
          orientation towards personal development, enjoy learning about new
          technologies, and have passion for web development.
        </p>

        <button className="flex items-center self-start gap-3 py-4 font-semibold transition-all rounded-lg px-7 bg-primary-blurple-500 text-gray-50 hover:bg-primary-blurple-600 outline-1 outline outline-primary-blurple-700 shadow-solid">
          <ArrowDownIcon /> See My Projects
        </button>

        <div className="flex flex-wrap items-center">
          <p className="mr-5 text-base font-semibold">Also find me on</p>
          <div className="flex items-center gap-1 mt-1">
            <div className="w-4 h-1 mr-1 bg-orange-500"></div>
            <IconButton
              className="w-12 h-12"
              href="https://github.com/dennydharmawan"
            >
              <GithubIcon />
            </IconButton>
            <IconButton
              className="w-12 h-12"
              href="https://linkedin.com/ddharmawan"
            >
              <LinkedinIcon />
            </IconButton>
            <IconButton
              className="w-12 h-12"
              href="mailto:hey@dennydharmawan.com"
            >
              <EmailIcon />
            </IconButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
