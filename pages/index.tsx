import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button, ButtonLink } from '~/components/Button'
import { BsArrowRightShort, BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";
import Card from '~/components/Card';
import {useState,useEffect} from 'react'
import Dropdown from '~/components/Dropdown';

const Home: NextPage = () => {
  const [isOpen, setIsOpen]=useState(false)
  const [navCol, setNavCol] = useState(false)
    const changeColor =()=>{
        if (window.scrollY >= 80) {
            setNavCol(true)
        }else{
            setNavCol(false)
        }
    }
    useEffect(() => {
          window.addEventListener('scroll', changeColor)
    }, [])
  return (
    <>
    <section className='lg:h-screen flex-col-reverse md:flex-col flex lg:flex-row relative items-center justify-center'>
     {/* <main className='h-screen bg-red-300 grid grid-cols-12'> */}
      <div className="h-screen lg:h-auto lg:px-20 px-4 flex flex-col justify-center lg:grid gap-4">
        <h1 className='font-bold'>Hi! I Am <br /> <p className='truncate'>Imam Satrio</p> </h1>
        <p className='text-lg'>I like to craft solid and scalable frontend products with great user experiences.</p>
        <div className="flex gap-4">
          <Button variants='primary' radius='rounded-full' size='md'>Hire me</Button>
          <ButtonLink href='/experience-education'><p className='flex h-full font-semibold items-center gap-1'>Projects <CgArrowTopRight/></p></ButtonLink>
          </div>
      </div>
      <div className="bg-[#E0DCD9] h-screen lg:h-full relative w-full flex flex-col ">
        <div className="font-medium text-lg z-10 absolute top-20 hidden md:flex justify-center w-full">Create Your apps and site <br /> using any Framework</div>
        <div className='flex h-full w-full items-end justify-center'>
        <div className='relative w-[400px] max-h-[790px] bg-[400px] h-full flex bg-contain bg-no-repeat bg-bottom' style={{backgroundImage: "url('/me.png')"} }>
          {/* <Image
          className=''
            alt="this me"
            src='/me.png'
            layout="fill"
            objectFit="contain"
          /> */}
        </div>
        </div>
        <div className="absolute bottom-10 z-10 md:flex w-full justify-center hidden">
          <div className="bg-white rounded-md flex p-1">
            <input type="text" className='w-full p-2 outline-none' placeholder='type here...'/>
            <Button variants='primary' radius='rounded-md'>
              <p className='text-2xl h-full flex items-center'>
                <BsArrowRightShort/>
              </p>
            </Button>
          </div>
        </div>
      </div>
    </section>
    <section className='flex flex-col lg:py-20 justify-center mx-4 gap-20'>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
        <div className=" order-last lg:order-none ">
          <Image src={'/about-il.png'} alt='' width={500} height={500}/>
        </div>
          <div className="flex flex-col lg:w-1/3 justify-center gap-3 text-center md:text-left">
            <h2 className='font-semibold pb-2'>About</h2>
            <p className='text-lg font-medium'>I&lsquo;m a Web Developer based in Bandung, Indonesia.</p>
            <p className=''> Since 2020, I&lsquo;ve been enjoying the process of slicing a design into a single line of code,
              When I&lsquo;m not in front of a laptop or pc screen, you&lsquo;ll find me reading, hiking, or exercising in the park.</p>
          </div>
      </div>
      <div className="flex items-center justify-center gap-16 container mx-auto lg:py-20">
        <div className="flex flex-col gap-5">
          <h3 className='font-light'>Part coder</h3>
          <ul className='flex flex-col gap-2'>
            <li>HTML / CSS</li>
            <li>Front-end development</li>
            <li>Swearing at my computer</li>
            <li>JavaScript / Typescript (kinda)</li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Image src={'/chart.png'} alt='' height={300} width={300}/>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className='font-light'>Part Designer</h3>
          <ul className='flex flex-col gap-2'>
            <li>UI Design</li>
            <li>Design System</li>
            <li>Interaction design</li>
            <li>Instagram Design Post</li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div className="flex flex-col lg:flex-row justify-center gap-5">
        <div className="order-last lg:order-none ">
          <Image src={'/skils.png'} alt='' width={500} height={500}/>
        </div>
        <div className="flex flex-col py-10 lg:w-1/3 gap-3 text-center md:text-left">
          <h2 className='font-semibold pb-2'>Tools & Skils</h2>
          <Dropdown icons={<BsChevronCompactDown/>} icons2={<BsChevronCompactUp/>} title={<h4 className='font-medium'>Language </h4>} className='px-3'>
              <ul className='grid gap-2 grid-cols-2'>
                <li>Bahasa Indonesia</li>
                <li>English (intermediate)</li>
              </ul>
          </Dropdown>
          <Dropdown icons={<BsChevronCompactDown/>} icons2={<BsChevronCompactUp/>} title={<h4 className='font-medium'>Programming </h4>} className='px-3'>
              <ul className='grid gap-2 grid-cols-4'>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>Next js</li>
                <li>Tailwind Css</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
                <li>Supabase</li>
                <li>Flutter</li>
                <li>C++</li>
                <li>PHP</li>
                <li>Arduino</li>
              </ul>
          </Dropdown>
          <Dropdown icons={<BsChevronCompactDown/>} icons2={<BsChevronCompactUp/>} title={<h4 className='font-medium'>Design</h4>} className='px-3'>
            <ul className='grid gap-2 grid-cols-4 truncate'>
              <li>Figma</li>
              <li>Inkscape</li>
              <li>Photoshop</li>
              <li>Adobe Ilustator</li>
            </ul>
          </Dropdown>
          <Dropdown icons={<BsChevronCompactDown/>} icons2={<BsChevronCompactUp/>} title={<h4 className='font-medium'>Office</h4>} className='px-3'>
            <ul className='grid gap-2 grid-cols-3 truncate'>
              <li>Notion</li>
              <li>Ms. Word</li>
              <li>Ms. Excel</li>
              <li>Ms. Power Point</li>
            </ul>
          </Dropdown>
        </div>
      </div>
    </section>
    {/* <main 
      className='h-screen bg-red-400 grid grid-cols-2 ' 
      >
      <div className="w-full paralax-img items-end justify-center " style={{backgroundImage: "url('https://images.unsplash.com/photo-1555344158-7d1d971af150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80')"}}>
        <div className="p-5 w-1/2 h-1/2">
          <Card radius='rounded-full' className='h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-white '>hehasde</Card>
        </div>
      </div>
      <div className="bg-black w-full">hehe</div>
    </main> */}
    
    </>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main>
    //     <Button variants='primary' size='sm'>
    //       <div className="">
    //         <p>hehe</p>
    //       </div>
    //     </Button>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  )
}

export default Home
