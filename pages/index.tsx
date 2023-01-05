import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import ArrowDownIcon from "../assets/arrowDown.svg";
import EmailIcon from "../assets/email.svg";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import MenuIcon from "../assets/menu2.svg";
import UnderlineDoodle from "../assets/underline.svg";
import Container from "../components/container";
import FloatingButton from "../components/FloatingButton";
import IconButton from "../components/iconButton";
import imageKitLoader from "../components/imageKitLoader";

//https://stackoverflow.com/questions/19484707/how-can-i-make-an-svg-scale-with-its-parent-container

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div
      id="content"
      className="relative flex flex-col min-h-screen font-inter"
    >
      <header>
        <div className="flex shadow-md outline outline-1 outline-gray-200">
          <h1 className="font-bold">Denny Dharmawan</h1>
          <nav className="ml-auto">
            <button aria-controls="primary-navigation" aria-expanded="false">
              <svg
                className={isMenuOpen ? 'ham ham6 active' : 'ham ham6'}
                viewBox="0 0 100 100"
                width="60"
                onClick={() => setMenuOpen(!isMenuOpen)}
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
                />
                <path
                  className="line middle"
                  d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
                />
                <path
                  className="line bottom"
                  d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
                />
              </svg>
              <span className="sr-only">menu</span>
            </button>

            <ul id="primary-navigation"></ul>
          </nav>
        </div>
      </header>

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

        <p className="text-lg text-gray-800">
          Hi, my name’s Denny Dharmawan. A software engineer with 5+ years
          experience in developing and maintaining websites. I possess a strong
          orientation towards personal development, enjoy learning about new
          technologies, and have passion for web development.
        </p>

        <button className="flex items-center self-start gap-3 py-4 text-base font-semibold transition-all rounded-lg px-7 bg-primary-blurple-500 text-gray-50 hover:bg-primary-blurple-600 outline-1 outline outline-primary-blurple-700 shadow-solid">
          <ArrowDownIcon /> See My Projects
        </button>

        <div className="flex flex-wrap items-center">
          <p className="mr-5 text-lg font-semibold">Also find me on</p>
          <div className="flex items-center gap-1 mt-1">
            <div className="w-4 h-1 mr-1 bg-orange-500"></div>
            <IconButton
              className="w-12 h-12"
              href="https://linkedin.com/ddharmawan"
            >
              <LinkedinIcon />
            </IconButton>
            <IconButton
              className="w-12 h-12"
              href="https://github.com/dennydharmawan"
            >
              <GithubIcon />
            </IconButton>
            <IconButton
              className="w-12 h-12"
              href="mailto:hi@dennydharmawan.com"
            >
              <EmailIcon />
            </IconButton>
          </div>
        </div>
      </Container>

      <div className="relative w-full aspect-[28/20]">
        <Image
          loader={imageKitLoader}
          src="artboard-workspace.png"
          alt="artboard-workspace"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="bg-primary-downriver-900">
        <Container className="flex flex-col gap-8 mt-12 mb-8 text-gray-50">
          <h2 className="text-3xl font-bold before:h-1 before:w-1/6 before:block before:bg-primary-pacific-400 before:-translate-y-1">
            My Specialties
          </h2>
          <p className="text-lg text-slate-300">
            Whether you are launching a new business or looking to scale your
            current product, I've got you covered with end-to-end skills that
            can bring your idea to life product.
          </p>
        </Container>
        <div className="relative w-full aspect-[32/24]">
          <Image
            loader={imageKitLoader}
            src="artboard-multi-device.png"
            alt="artboard-multi-device"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* <div>
        <h3>Latest Projects</h3>
        <p>
          Sorry, this section is under construction. Please come back again
          later.
        </p>
      </div> */}
      <div className="bg-[#F0F9FF]">
        <Container className="flex flex-col gap-6 my-14">
          <h2 className="relative z-0 self-start mx-auto mb-12 text-3xl font-bold text-center before:h-3 before:bg-primary-blurple-200 before:absolute before:bottom-0 before:left-0 before:w-full before:-z-10">
            Work Experience
          </h2>

          <header className="flex flex-col gap-1">
            <h3 className="font-bold text-md">
              <Link href="https://www.jenius.com" target="_blank">
                Jenius - Bank BTPN
              </Link>
            </h3>
            <p className="font-bold text-slate-500">Dec 2019 - Present</p>
          </header>

          <p className="text-base text-gray-800">
            A digital banking app from Bank BTPN with more than 3.000.000 users.
            It has a variety of features such as savings, payment, investment,
            loan, and many more. I am mainly responsible for lending feature.
          </p>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 bg-orange-500"></div>
              <h4 className="font-bold text-md text-primary-blurple-600">
                Key Achievements
              </h4>
            </div>
            <div className="flex flex-col gap-5 text-base text-gray-800">
              <p>
                Maintained and enhanced Flexi Cash that experienced averaged
                147% increase in user growth within 3 years
                (https://www.jenius.com/app/fund/flexi-cash)
              </p>
              <p>
                Spearheaded partnership development with Eraphone, Sentraponsel,
                and Ikea in selling Flexi Cash
              </p>
              <p>
                Migrated 300+ user’s data into a new Forgerock realm on
                partnership platform
              </p>
              <p>
                Refactored a slow-performing website/microservices and increased
                its average execution time by 37%
              </p>
              <p>
                Supported credit-card product development and launch in 2022
                (https://www.jenius.com/app/credit/kartu-kredit)
              </p>

              <p>Achieved minimum 90% of squad’s target on each scrum sprint</p>

              <p>
                Achieved above-average KPI (scored 4 out of 5) on performance
                review for 3 consecutive years
              </p>
            </div>
          </div>
        </Container>
      </div>

      <footer className="text-gray-50 bg-primary-downriver-900">
        <div className="flex flex-col items-center gap-12 my-12">
          <h3>Denny Dharmawan</h3>
          <ul className="flex gap-5 text-primary-downriver-100">
            <li>
              <Link href="https://linkedin.com/in/ddharmawan">
                <LinkedinIcon />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/dennydharmawan">
                <GithubIcon />
              </Link>
            </li>
            <li>
              <Link href="mailto:hi@dennydharmawan.com">
                <EmailIcon />
              </Link>
            </li>
          </ul>
          <div className="text-primary-downriver-100">
            © {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
