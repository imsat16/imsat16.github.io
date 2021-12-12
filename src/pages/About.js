import React from 'react';
import FooterComp from '../Component/FooterComp';
import {
  PROF2,
  SD,
  SMP,
  SMK,
  UNIV,
  HIKING,
  READ,
  CODING,
  CODING2,
  OFFICE,
  DESIGN,
  HTML,
  REACTJS,
  CSS,
  FLUTTER,
  JAVASCRIPT,
  VUEJS,
  PHP,
  CPP,
  FIGMA,
  ILUSTATOR,
  INKSCAPE,
  PHOTOSHOP,
  VISIO,
  PPT,
  EXCEL,
  WORD,
} from '../assets/img/IndexImg';
import ReactReadMoreReadLess from 'react-read-more-read-less';

function About () {
  return (
    <section className="about">
      <section className="intro  text-white ">
        <div className=" h-screen items-center md:justify-between flex flex-col md:flex-row md:px-10">
          <h2 className=" block md:hidden py-3 animate-bounce hi mt-10">
            Hello i'm Imam
          </h2>
          <img src={PROF2} alt="profile" className="md:w-96 w-64 z-10" />
          <div className="z-10">
            <div className="flex flex-col md:px-16 px-10 mt-10 md:mt-0 font-semibold ">
              <ReactReadMoreReadLess
                charLimit={150}
                readMoreText={'more'}
                readMoreClassName={
                  'text-right text-white font-bold animate-bounce'
                }
                readLessText={'less'}
                readLessClassName={
                  'text-right text-white font-bold animate-bounce'
                }
              >
                "Hello, my name is Imam Satrio Prakoso, you can just call me Imam or Imsat to be more familiar. I am a programmer focused on mobile & Web programming. I have been interested in programming since I was in Vocational High School with only learning programming at school and the rest were self-taught. In grade 11 I did an internship at a digital company in Bandung, only with a little bit of knowledge about programming, but that's where I learned a lot. Many people say I'm just lucky, but the goddess of fortune is also lazy to give her luck to people who don't try."
              </ReactReadMoreReadLess>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-0">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#5B8FC4"
                fill-opacity="1"
                d="M0,288L26.7,277.3C53.3,267,107,245,160,229.3C213.3,213,267,203,320,170.7C373.3,139,427,85,480,90.7C533.3,96,587,160,640,165.3C693.3,171,747,117,800,112C853.3,107,907,149,960,144C1013.3,139,1067,85,1120,90.7C1173.3,96,1227,160,1280,202.7C1333.3,245,1387,267,1413,277.3L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
              />
            </svg>
            <svg
              className="absolute md:relative"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#5B8FC4"
                fill-opacity="1"
                d="M0,160L120,138.7C240,117,480,75,720,85.3C960,96,1200,160,1320,192L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="education md:mt-12 z-40 text-center w-full uppercase">
        <div className="">
          <div>
            <h2 className="font-bold text-white">Education</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-evenly my-10">
            <div className="">
              <div
                className="bg-white rounded-md py-5 px-5 flex justify-center items-center flex-col mb-5"
                onClick={() =>
                  window.open (
                    'https://goo.gl/maps/g6SoS545r3BXevAr9/',
                    '_blank'
                  )}
              >
                <img
                  src={SD}
                  alt="sekolah dasar"
                  className=" flex w-44 hover:animate-bounce"
                />
                <a href className="text-xs md:text-base font-semibold">
                  SD Babakan Surabaya Utara
                </a>
              </div>
              <div
                className="bg-white rounded-md py-5 px-5 flex justify-center items-center flex-col my-5 md:my-0"
                onClick={() =>
                  window.open (
                    'https://goo.gl/maps/16xQAd9xYurWEPGt7/',
                    '_blank'
                  )}
              >
                <img
                  src={SMK}
                  alt="sekolah menengah kejuruan"
                  className=" flex w-44 hover:animate-bounce"
                />
                <a href className="text-xs md:text-base font-semibold">
                  smk mvp ars internasional
                </a>
              </div>
            </div>
            <div>
              <div
                className="bg-white rounded-md py-5 px-5 flex justify-center items-center flex-col mb-5"
                onClick={() =>
                  window.open (
                    'https://goo.gl/maps/q9iukjQqd2VPNyuA7/',
                    '_blank'
                  )}
              >
                <img
                  src={SMP}
                  alt="sekolah menengah pertama"
                  className=" flex w-44 hover:animate-bounce"
                />
                <a href className="text-xs md:text-base font-semibold">
                  SMP Negeri 37 Bandung
                </a>
              </div>
              <div
                className="bg-white rounded-md py-5 px-5 flex justify-center items-center flex-col "
                onClick={() =>
                  window.open (
                    'https://goo.gl/maps/16xQAd9xYurWEPGt7/',
                    '_blank'
                  )}
              >
                <img
                  src={UNIV}
                  alt="perguruan tinggi"
                  className=" flex w-44 hover:animate-bounce"
                />
                <a href className="text-xs md:text-base font-semibold">
                  ars university
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hobbies md:mt-12 text-center w-full uppercase">
        <div className="">
          <div>
            <h2 className="font-bold text-white">hobbies</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-evenly my-10">
            <img src={HIKING} alt="Hiking" className=" md:w-64 w-44" />
            <img src={CODING} alt="coding" className=" md:w-64 w-44 py-10" />
            <img src={READ} alt="reading" className=" md:w-64 w-44" />
          </div>
        </div>
      </section>

      <section className="skils md:mt-12 text-center w-full uppercase">
        <div className="">
          <div>
            <h2 className="font-bold text-white">skils</h2>
          </div>
          <div className="flex flex-col my-10 ">
            <div class="md:px-28 px-10 md:text-sm text-xs">
              <div className="flex flex-col md:flex-row justify-evenly">
                {/* 1 */}
                <div className=" flex justify-center">
                  <div className="flex flex-col py-10 text-white font-semibold text-xl">
                    <h2>coding</h2>
                    <img
                      src={CODING2}
                      alt="Programing skils"
                      className=" md:w-64 w-44"
                    />
                  </div>
                </div>
                {/* 2 */}
                <div className="text-left grid md:grid-cols-4 gap-4 p-8 items-center font-semibold text-gray-700">
                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={HTML}
                        alt=""
                        className="h-10 p-2 bg-white rounded-lg"
                      />
                      <p className='hidden xl:block'>html 5</p>
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
                        <div
                          style={{width: '99.9%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={REACTJS}
                        alt=""
                        className="h-10 p-2 bg-white rounded-lg"
                      />
                      React js
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                        <div
                          style={{width: '78%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={CSS}
                        alt=""
                        className="h-10 p-2 bg-white rounded-lg"
                      />
                      css
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                        <div
                          style={{width: '90%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={FLUTTER}
                        alt=""
                        className="h-10 p-2 bg-white rounded-lg"
                      />
                      flutter
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                        <div
                          style={{width: '90%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={JAVASCRIPT}
                        alt=""
                        className="h-10 p-2 bg-white rounded-lg"
                      />
                      javascript
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
                        <div
                          style={{width: '77%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={VUEJS}
                        alt=""
                        className="h-10 p-2 bg-white rounded-lg"
                      />
                      vue JS
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                        <div
                          style={{width: '50%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={PHP}
                        alt=""
                        className="h-10 p-1 bg-white rounded-lg"
                      />
                      php
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                        <div
                          style={{width: '70%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-400"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={CPP}
                        alt=""
                        className="h-10 p-1 bg-white rounded-lg"
                      />
                      c++
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                        <div
                          style={{width: '50%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-col md:flex-row justify-evenly">
                {/* 3 */}
                <div className=" flex justify-center">
                  <div className="flex flex-col py-10 text-white font-semibold text-xl">
                    <h2>design</h2>
                    <img
                      src={DESIGN}
                      alt="Programing skils"
                      className=" md:w-64 w-44"
                    />
                  </div>
                </div>
                {/* 4 */}
                <div className="text-left grid md:grid-cols-4 gap-4 p-8 items-center font-semibold text-gray-700">

                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={FIGMA}
                        alt=""
                        className="h-10 p-2 bg-white rounded-lg"
                      />
                      figma
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                        <div
                          style={{width: '77%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={INKSCAPE}
                        alt=""
                        className="h-10 p-2 bg-white rounded-lg"
                      />
                      inkscape
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                        <div
                          style={{width: '50%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={ILUSTATOR}
                        alt=""
                        className="h-10 p-1 bg-white rounded-lg"
                      />
                      ilustator
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-300">
                        <div
                          style={{width: '70%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-700"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={PHOTOSHOP}
                        alt=""
                        className="h-10 p-1 bg-white rounded-lg"
                      />
                      photoshop
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                        <div
                          style={{width: '50%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-col md:flex-row justify-evenly">
                {/* 5 */}
                <div className=" flex justify-center">
                  <div className="flex flex-col py-10 text-white font-semibold text-xl">
                    <h2>office</h2>
                    <img
                      src={OFFICE}
                      alt="Programing skils"
                      className="w-44 "
                    />
                  </div>
                </div>
                {/* 6 */}
                <div className="text-left grid md:grid-cols-4 gap-4 p-8 items-center font-semibold text-gray-700">
                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={WORD}
                        alt=""
                        className="h-10 p-2 bg-white rounded-lg"
                      />
                      word
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                        <div
                          style={{width: '89%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={EXCEL}
                        alt=""
                        className="h-10 p-2 bg-white rounded-lg"
                      />
                      excel
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                        <div
                          style={{width: '78%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={PPT}
                        alt=""
                        className="h-10 p-2 bg-white rounded-lg"
                      />
                      power point
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-300">
                        <div
                          style={{width: '90%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-600"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-md">
                    <div className="flex items-center">
                      <img
                        src={VISIO}
                        alt=""
                        className="h-10 p-2 bg-white rounded-lg"
                      />
                      visio
                    </div>
                    <div className="relative pt-1 ">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                        <div
                          style={{width: '90%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComp />
    </section>
  );
}

export default About;
