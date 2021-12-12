import React, {useEffect} from 'react';
import {PROF} from '../assets/img/IndexImg';
import {useHistory} from 'react-router-dom';
import {gsap} from 'gsap';
import {TextPlugin} from 'gsap/TextPlugin';
import PDF from '../assets/Document/resume.pdf'

gsap.registerPlugin (TextPlugin);

function Home () {
  useEffect (() => {
    gsap.to ('.hi', {duration: 1.5, y: -20, ease: 'power1.out(1.5)'});
    gsap.to ('.qwe', {duration: 1.5, text: 'Web dev | Mobile dev'});
  });
  let history = useHistory ();

  function handleClick () {
    history.push ('/about');
  }
  return (
    <section className="home fixed w-screen text-white ">
      <div className="flex flex-col h-screen justify-center relative">
        <div className="flex items-center flex-col md:flex-row justify-evenly px-8 py-4 absolute w-full inset-x-0 top-20 z-40">
          <h2 className=" block md:hidden py-3 animate-bounce hi">
            Hello i'm Imam
          </h2>
          <div className=" rounded-md pt-2 hover:rounded-xl bg-white transition duration-700 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-100">
            <img
              src={PROF}
              alt="profile"
              onClick={handleClick}
              className="transform hover:scale-110 hover:rounded-b-2xl w-56 rounded-b-md md:w-72 transition duration-500 ease-in-out hover:-translate-y-3 md:hover:-translate-y-2"
            />
          </div>
          <div className=" py-5 md:py-0 px-0 lg:py-5 text-center">
            <h1 className="hidden md:block animate-bounce hi">
              Hello i'm Imam
            </h1>
            <h5 className=" text-gray-600 font-medium qwe">{' '}</h5>
            <div className="flex flex-col md:flex-row items-center justify-center py-2">
              <div className="py-2 md:pr-2">
                <button onClick={() => window.open (PDF, '_blank')} className="flex flex-row shadow-md py-2 border-2 hover:border-transparent px-3 rounded-lg md:transition md:duration-500 md:ease-in-out  hover:bg-blue-200 transform md:hover:-translate-x-1 md:hover:scale-110">
                  Download CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </button>
              </div>
              <div className="">
                <button
                  className="flex flex-row shadow-md py-2 border-2 hover:border-transparent px-3 rounded-lg transition md:duration-500 md:ease-in-out  hover:bg-blue-200 transform md:hover:translate-x-1 md:hover:scale-110"
                  onClick={handleClick}
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <FooterComp /> */}
    </section>
  );
}

export default Home;
