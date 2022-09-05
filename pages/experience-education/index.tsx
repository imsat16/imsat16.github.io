import Image from 'next/image'
import React, { useEffect, useState, ReactNode } from 'react'
import {Button} from '~/components/Button'
import Dropdown from '~/components/Dropdown'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import Card from '~/components/Card'
import { supabase } from '~/utils/supabaseClient'

const Experiences = () => {
    const [allex, setAllex] = useState(true);
    const [web, setWeb] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [iot, setIot] = useState(false);
    const [judul, setJudul] = useState('');
    const [fetchError, setFetchError] = useState(null)
    const [myEx, setMyEx] =  useState<any[]>([])
    // const [arr, setArr] = useState<any[]>([])

    useEffect(() => {
        const fetcExp = async () =>{
            const {data, error}:any = await supabase
            .from('projects')
            .select()

            if (error) {
                setMyEx(error)
                setFetchError(null);
                console.log(error);
            }
            if (data) {
                setMyEx(data)
                setFetchError(null)
                console.log(data);
            }
        }
        fetcExp()
    }, []);
    

    const handleAllex = () => {
        allex ? setAllex(false) : setAllex(true),
            setJudul('All'),
            setWeb(false),
            setIot(false),
            setMobile(false)

        if (allex == (true)) {
            setAllex(false)
        }
        
    }
    const handleWeb = () => {
        web ? setWeb(false) : setWeb(true),
            setJudul('Website'),
            setMobile(false),
            setIot(false),
            setAllex(false)

        if (web == (true)) {
            setWeb(false)
        }
    }
    const handleMobile = () => {
        mobile ? setMobile(false) : setMobile(true),
            setJudul('Mobile'),
            setWeb(false),
            setIot(false),
            setAllex(false)

        if (mobile == (true)) {
            setMobile(false)
        }
    }
    const handleIot = () => {
        iot ? setIot(false) : setIot(true),
            setJudul('Iot'),
            setWeb(false),
            setMobile(false),
            setAllex(false)

        if (iot == (true)) {
            setIot(false)
        }
    }

    return (
        <main className='container mx-auto flex flex-col'>
            <section>
                <h1 className='font-bold'>/</h1>
            </section>
            <section className="px-4">
                <h1 className='font-bold'>/</h1>
                <div className='justify-end flex'>
                    <Dropdown radius='rounded-lg' title={judul?judul:'All'} icons={<BsChevronDown />} icons2={<BsChevronUp />} variants='primary' className='rounded-t-lg absolute right-0 top-10 '>
                        <Button value={'All'} onClick={handleAllex} radius={'rounded-md'} className='hover:bg-[#435237]'>All</Button>
                        <Button value={'Websites'} onClick={handleWeb} radius={'rounded-md'} className='hover:bg-[#435237]'>Websites</Button>
                        <Button value={'Mobiles'} onClick={handleMobile} radius={'rounded-md'} className='hover:bg-[#435237] truncate'>Mobile</Button>
                        <Button value={'IoT'}onClick={handleIot} radius={'rounded-md'} className='hover:bg-[#435237]'>Iot</Button>
                    </Dropdown>
                </div>
                <div>
                    {
                        myEx &&(
                            <div className={web ? "grid md:grid-cols-2 lg:grid-cols-4 gap-4" :"hidden"}>
                                {myEx
                                .filter(my => my.type === 'web')
                                .map((my:any)=>(
                                    <div key={my.id}>
                                        <Card link={`/experience-education/${my.id}`} className='hover:-translate-y-5 ease-in-out duration-500 transition-all'>
                                        {/* <Card size='md' display='grid' className={`shadow-md md:border-none grid-cols-6 content-center`}> */}
                                            <div className="relative col-span-2">
                                                <Image alt='' layout='fill' objectFit='contain' src={`/${my.img}`} />
                                            </div>
                                                <div className="flex flex-col justify-center col-span-4 ">
                                                    <p className='font-semibold text-lg truncate'>{my.name}</p>
                                                    <span className='line-clamp-2 text-sm'>{my.desc}</span>
                                                </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                    {
                        myEx &&(
                            <div className={mobile ? "grid md:grid-cols-2 lg:grid-cols-4 gap-4" :"hidden"}>
                                {myEx
                                .filter(my => my.type === 'mobile')
                                .map((my:any)=>(
                                    <div key={my.id}>
                                        <Card link={`/experiences/${my.name}`} className='hover:-translate-y-5 ease-in-out duration-500 transition-all'>
                                        {/* <Card size='md' display='grid' className={`shadow-md md:border-none grid-cols-6 content-center`}> */}
                                            <div className="relative col-span-2">
                                                <Image alt='' layout='fill' objectFit='contain' src={`/${my.img}`} />
                                            </div>
                                                <div className="flex flex-col justify-center col-span-4 ">
                                                    <p className='font-semibold text-lg'>{my.name}</p>
                                                    <span className='line-clamp-2 text-sm'>{my.desc}</span>
                                                </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                    {
                        myEx &&(
                            <div className={iot ? "grid md:grid-cols-2 lg:grid-cols-4 gap-4" :"hidden"}>
                                {myEx
                                .filter(my => my.type === 'iot')
                                .map((my:any)=>(
                                    <div key={my.id}>
                                        <Card link={`/experiences/${my.name}`} className='hover:-translate-y-5 ease-in-out duration-500 transition-all'>
                                        {/* <Card size='md' display='grid' className={`shadow-md md:border-none grid-cols-6 content-center`}> */}
                                            <div className="relative col-span-2">
                                                <Image alt='' layout='fill' objectFit='contain' src={`/${my.img}`} />
                                            </div>
                                                <div className="flex flex-col justify-center col-span-4 ">
                                                    <p className='font-semibold text-lg'>{my.name}</p>
                                                    <span className='line-clamp-2 text-sm'>{my.desc}</span>
                                                </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                    {
                        myEx &&(
                            <div className={allex ? "grid md:grid-cols-2 lg:grid-cols-4 gap-4" :"hidden"}>
                                {myEx
                                .map((my:any)=>(
                                    <div key={my.id}>
                                        <Card link={`/experiences/${my.name}`} className='hover:-translate-y-5 ease-in-out duration-500 transition-all'>
                                        {/* <Card size='md' display='grid' className={`shadow-md md:border-none grid-cols-6 content-center`}> */}
                                            <div className="relative col-span-2">
                                                <Image alt='' layout='fill' objectFit='contain' src={`/${my.img}`} />
                                            </div>
                                                <div className="flex flex-col justify-center col-span-4 ">
                                                    <p className='font-semibold text-lg truncate'>{my.name}</p>
                                                    <span className='line-clamp-2 text-sm'>{my.desc}</span>
                                                </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                </div>
            </section>
        </main>
    )
}

export default Experiences