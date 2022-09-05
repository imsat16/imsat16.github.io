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
    const [myEx, setMyEx] = useState(null)

    useEffect(() => {
        const fetcExp = async () =>{
            const {data, error}:any = await supabase
            .from('experiences')
            .select()

            if (error) {
                setMyEx(null)
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
            (web = setWeb(false)),
            (iot = setIot(false)),
            (mobile = setMobile(false))

        if (allex = setAllex(true)) {
            allex = setAllex(false)
        }
        
    }
    const handleWeb = () => {
        web ? setWeb(false) : setWeb(true),
            setJudul('Website'),
            (mobile = setMobile(false)),
            (iot = setIot(false)),
            (allex = setAllex(false))

        if ((web = setWeb(true))) {
            web = setWeb(false)
        }
    }
    const handleMobile = () => {
        mobile ? setMobile(false) : setMobile(true),
            setJudul('Mobile'),
            (web = setWeb(false)),
            (iot = setIot(false)),
            (allex = setAllex(false))


        if ((mobile = setMobile(true))) {
            mobile = setMobile(false)
        }
    }
    const handleIot = () => {
        iot ? setIot(false) : setIot(true),
            setJudul('Iot'),
            (web = setWeb(false)),
            (mobile = setMobile(false)),
            (allex = setAllex(false))


        if ((iot = setIot(true))) {
            iot = setIot(false)
        }
    }
    const changeText = ()=>{
        judul?setJudul('All'):'notall'
        // web?setJudul('Web'):''
        // mobile?setJudul('Mobile'):''
        // iot?setJudul('IoT'):''
    }

   


    const items = [
        { id: 1, name: 'Poliklinik', type: 'web', img: 'images/category/web.png', desc: 'Poliklinik is a website or application about hospital management' },
        { id: 2, name: 'SPP Pay', type: 'mobile', img: 'images/category/app.png', desc: 'spp pay is a mobile application for school payment management' },
        { id: 3, name: 'Automatic Faucet', type: 'iot', img: 'images/category/iot.png', desc: 'Automatic Faucet stands for smart aquaponic system which is an IoT tool to make it easier for farmers and breeders' },
        { id: 4, name: 'Smart Aquaponic', type: 'iot', img: 'images/category/iot.png', desc: 'Automatic faucet is a tool from the internet of things that makes it easy for users to wash their hands without touching a faucet' },
        { id: 5, name: 'Toik', type: 'web', img: 'images/category/web.png', desc: 'TOIK is a web application for selling fish' },
        { id: 6, name: 'Sukabumi Kita', type: 'mobile', img: 'images/category/app.png', desc: 'sukabumi kita is an application for the Sukabumi area, web and mobile applications to find out tourism, UMKM, history, etc.' },
        { id: 7, name: 'The-Export', type: 'web', img: 'images/category/web.png', desc: 'The-Export is a web application for exporting items from within the country' },
        { id: 8, name: 'Lybra.my.id', type: 'web', img: 'images/category/web.png', desc: 'The-Export is a web application for exporting items from within the country' },
        { id: 9, name: 'HRIS', type: 'web', img: 'images/category/web.png', desc: 'The-Export is a web application for exporting items from within the country' },
        { id: 10, name: 'Ats Backoffice', type: 'web', img: 'images/category/web.png', desc: 'The-Export is a web application for exporting items from within the country' },
        { id: 11, name: 'Megasoft.co.id', type: 'web', img: 'images/category/web.png', desc: 'The-Export is a web application for exporting items from within the country' },
    ]

    return (
        <main className='container mx-auto flex flex-col'>
            <h1 className='font-bold'>Projects</h1>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            {/* <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-y-16 select-none'> */}
            <div>
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
                                                <p className='font-semibold text-lg'>{my.name}</p>
                                                <span className='line-clamp-2 text-sm'>{my.desc}</span>
                                            </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </main>
    )
}

export default Experiences